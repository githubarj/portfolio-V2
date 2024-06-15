import { Breadcrumb, Col } from 'antd';
import { Link } from 'react-router-dom';
import { aboutItems } from './navigation';

const CustomBreadCrumb = ({ pathArray, isMobile }) => {
  let menuItems = [];
  if (pathArray[2]) {
    switch (pathArray[2]) {
      case 'bio':
        menuItems = aboutItems[0].children[0].children; //accessing deeply nested prop of children with they keys I want
        break;
      case 'experience':
        menuItems = aboutItems[0].children[1].children;
        break;
      case 'education':
        menuItems = aboutItems[0].children[2].children;
        break;
      default:
        menuItems = [];
        break;
    }
  }

  let items = [];
  for (let i = 0; i <= pathArray.length; i++) {
    // check if on the 3rd index, if on the 3rd index add menu items
    if (i <= 2) {
      items.push({
        title: pathArray[i],
      });
    } else {
      // check if the menu items are there already
      if (!items[2].menu) {
        items[2].menu = {
          items: menuItems,
        };
      }
    }
  }

  console.log(items);

  function itemRender(currentRoute, params, items, paths) {
    return <span className='bread-crumb-items'>{currentRoute.title}</span>;
  }

  return (
    <Breadcrumb
      className='bread-crumb'
      separator='>'
      itemRender={itemRender}
      items={items}
    />
  );
};

export default CustomBreadCrumb;
