import { Col, Flex, Tooltip, Typography } from 'antd';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';
import React from 'react';
const { Text } = Typography;

const FooterContent = () => {
  const socials = [
    {
      title: 'GitHub',
      icon: FaGithub,
      link: 'https://github.com/githubarj',
    },
    {
      title: 'linked in',
      icon: GrLinkedinOption,
      link: 'https://www.linkedin.com/in/richard-jeremy-githuba-80548922a/',
    },
    {
      title: 'Twitter',
      icon: FaTwitter,
      link: 'https://twitter.com/githubarj',
    },
    {
      title: 'GitHub',
      icon: PiGithubLogoFill,
      link: 'https://github.com/githubarj',
      username: '@githubarj',
    },
  ];

  return (
    <Flex align='center' className='footer'>
      <Col className='footer__items'>
        <Text>Find me on: </Text>
      </Col>
      {socials.map((item, index) => (
        <a
          href={item.link}
          target='blank'
          key={index}
          className='footer__items footer__links'
        >
          <Col>
            <Tooltip title={item.title}>
              <Text>{item.username}</Text> {React.createElement(item.icon)}
            </Tooltip>
          </Col>
        </a>
      ))}
    </Flex>
  );
};

export default FooterContent;
