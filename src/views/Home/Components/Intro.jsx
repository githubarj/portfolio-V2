import { Col, Flex, Typography } from 'antd';
const { Text, Title, Link } = Typography;
const Intro = () => {
  return (
    <Flex vertical className='intro-container' gap='large'>
      <Col>
        <Text style={{ color: '#fff' }}> Hi all, I am </Text>
        <Title level={1} style={{ color: '#fff', marginTop: '5px' }}>
          Jeremy Richard Githuba
        </Title>
        <Title level={3} style={{ color: '#4d5bce' }}>
          &gt; Software Developer
        </Title>
      </Col>
      <Flex vertical>
        <Text type='secondary'>
          &#47;&#47; here you can check out my resume on the _about-me page and
          my previous work on my _projects page
        </Text>
        <Text type='secondary'>
          &#47;&#47; you can also check out my github profile to raise an issue about
          this website
        </Text>

        <Text style={{ marginTop: '10px' }}>
          <span style={{ color: '#4d5bce' }}>const </span>
          <span style={{ color: '#43D9AD' }}>githubLink </span>
          <span style={{ color: '#fff' }}>= </span>
          <Link
            href='https://github.com/githubarj'
            target='_blank'
            underline
            style={{ color: '#e99287' }}
          >
            &quot;https://github.com/githubarj&quot;
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Intro;
