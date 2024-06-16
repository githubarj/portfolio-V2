import {
  Button,
  Card,
  Col,
  Flex,
  FloatButton,
  Skeleton,
  Tag,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaCss3, FaReact } from 'react-icons/fa6';
import { filterIcons } from './filterIcons';
import { v4 as uuidv4 } from 'uuid';

const { Text } = Typography;

const CardComponent = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  });

  const { description, category, title, link, image } = props;
  const layout = {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
  };

  const categories = filterIcons.filter((item) => category.includes(item.key));
  console.log(categories);

  return (
    <Col className='projects-container__columns' {...layout}>
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          <Flex justify='space-between' align='center'>
            <Text> {title} </Text>
            <div className='icons'>
              {categories.map((item) => (
                <Tag
                  icon={React.createElement(item.icon)}
                  key={uuidv4()}
                  bordered={false}
                >
                  {' '}
                </Tag>
              ))}
            </div>
          </Flex>
          <Card
            bordered={false}
            size='small'
            className='projects-card'
            hoverable
            cover={
              <div
                style={{
                  height: '120px',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              />
            }
          >
            <Text> {description} </Text>
            <Button type='primary'> show-details </Button>
          </Card>
        </>
      )}
    </Col>
  );
};

export default CardComponent;
