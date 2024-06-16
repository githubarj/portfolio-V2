import { Button, Card, Col, ConfigProvider, Skeleton, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { FaEye, FaLink } from 'react-icons/fa6';

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
  return (
    <Col className='projects-container__columns' {...layout}>
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          <Text> {title} </Text>
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
