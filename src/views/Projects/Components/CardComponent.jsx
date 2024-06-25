import {  Card, Col, Flex, Tag, Typography } from 'antd';
import React from 'react';
import { filterIcons } from './filterIcons';
import { v4 as uuidv4 } from 'uuid';

// TODO optimize loading of images

const { Text, Link } = Typography;

const CardComponent = (props) => {
  const { description, category, title, link, image } = props;
  const layout = {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
  };

  const categories = filterIcons.filter((item) => category.includes(item.key));

  return (
    
      <Col className='projects-container__columns' {...layout}>
       
        <Flex justify='space-between' align='center'>
          <Text> {title} </Text>
          <div className='icons'>
            {categories.map((item) => (
              <Tag
                icon={React.createElement(item.icon, { color: item.color })}
                key={uuidv4()}
                bordered={false}
              ></Tag>
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
          <Text style={{ color: 'silver' }}>{description}</Text>

          <Link href={link} target='_blank' className='link' type='link'>
            link &gt;
          </Link>
        </Card>
       
      </Col>
  );
};

export default CardComponent;
