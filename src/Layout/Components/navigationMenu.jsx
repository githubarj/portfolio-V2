import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { aboutItems, projectsItems, contactItems } from './navigation';
import useRouting from '../../hooks/useRouting';

// TODO: Fix the menus on this page - route switching and persistence in openKeys across routes, move state management to redux
// TODO: clikcable link to open gmail
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const NavigationMenu = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState([
    'personal-info',
    'bio',
    'projects',
    'contacts',
    'find-me-also-on',
  ]);

  const { pathArray } = useRouting();

  const path = pathArray[0] || '';
  const items =
    path === 'projects'
      ? projectsItems
      : path === 'contact-me'
      ? contactItems
      : path === 'about'
      ? aboutItems
      : null;

  const levelKeys = getLevelKeys(items);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: '#4d5bce',
            itemSelectedColor: '#fff',
            itemBorderRadius: 0,
          },
        },
      }}
    >
      <Menu
        multiple={path === 'projects'}
        className='navigation-menu'
        mode='inline'
        defaultSelectedKeys={[
          'personal-info',
          'bio',
          'overview',
          'React',
          'Solidity',
        ]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
    </ConfigProvider>
  );
};
export default NavigationMenu;
