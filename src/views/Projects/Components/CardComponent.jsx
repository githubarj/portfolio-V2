import { Button, Card, Col, Flex, Skeleton, Tag, Typography } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { filterIcons } from './filterIcons';
import { v4 as uuidv4 } from 'uuid';

const { Text, Link } = Typography;

const CardComponent = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

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
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          {/* TODO make this a fallback of a suspense or add a loader with a setTimeout */}
          <Skeleton
            active
            style={{
              display: loading ? 'block' : 'none',
              position: 'absolute',
            }}
          />
          {/* <Suspense fallback={<Skeleton />}> find out how to use suspense and hot it works */}
          <Flex
            justify='space-between'
            align='center'
            style={{
              visibility: !loading ? 'visible' : 'hidden',
            }}
          >
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
          
            style={{
              visibility: !loading ? 'visible' : 'hidden',
            }}
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
            <Text style={{ color: 'silver' }}>
              {' '}
              {description}{' '}
            </Text>

            <Link href={link} target='_blank' className='link' type='link'>
              link &gt;
            </Link>
          </Card>
          {/* </Suspense> */}
        </>
      )}
    </Col>
  );
};

export default CardComponent;
