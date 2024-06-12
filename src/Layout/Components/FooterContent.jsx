import { Col, Flex, Tooltip, Typography } from 'antd';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';
import React from 'react';
import { ImEyeMinus } from 'react-icons/im';
const { Text } = Typography;

const FooterContent = () => {
  const socials = [
    {
      title: 'linked in',
      icon: GrLinkedinOption,
      link: 'www.linkedin.com/in/richard-jeremy-githuba-80548922a',
    },
    {
      title: 'Twitter',
      icon: FaTwitter,
      link: '',
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
        <Col className='footer__items footer__links' key={index}>
          <Tooltip title={item.title}>
            <a href={item.link} target='blank'>
              <Text>{item.username}</Text> {React.createElement(item.icon)}
            </a>
          </Tooltip>
        </Col>
      ))}
    </Flex>
  );
};

export default FooterContent;
