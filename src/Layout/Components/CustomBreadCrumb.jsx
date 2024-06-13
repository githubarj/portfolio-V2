import { Breadcrumb, Col } from 'antd';
import { Link } from 'react-router-dom';

const CustomBreadCrumb = ({ pathArray, isMobile }) => {
  let items = [];
  for (let i = 0; i < pathArray.length; i++) {
    if (i < 3) {
      items.push({
        path: `/${pathArray[i]}`,
        title: pathArray[i],
      });
    } else {
      // Check if children array exists, if not, initialize it
      if (!items[2].menu) {
        items[2].menu = {
          items: [],
        };
      }
      // Push to the children array of the third item
      items[2].menu.items.push({
        key: pathArray[i],
        label: pathArray[i],
      });
    }
  }

  console.log(items);

  function itemRender(currentRoute, params, items, paths) {
    return <span>{currentRoute.title}</span>;
  }

  return <Breadcrumb separator='>' itemRender={itemRender} items={items} />;
};

export default CustomBreadCrumb;
