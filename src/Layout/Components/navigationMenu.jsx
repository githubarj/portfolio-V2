import { ConfigProvider, Menu } from 'antd';
import { aboutItems, projectsItems, contactItems } from './navigation';
import useRouting from '../../hooks/useRouting';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenKeys } from '../../redux/slices/navSlice';

const NavigationMenu = () => {
  const stateOpenKeys = useSelector((state) => state.layout.openKeys.value);
  const dispatch = useDispatch();

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

  const levelKeys = getLevelKeys(items);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    ); //gets the last item in the array
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      dispatch(
        setOpenKeys(
          openKeys
            .filter((_, index) => index !== repeatIndex)
            .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
        )
      );
    } else {
      dispatch(setOpenKeys(openKeys));
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
