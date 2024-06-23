import { ConfigProvider, Flex, List, Typography } from 'antd';
const { Text } = Typography;
export default function AltCard({ date, title, items, facility }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: '#011221',
            colorTextHeading: '#010C15',
          },
          List: {
            colorText: '#011221',
            itemPaddingSM : '5px 0px'
          },
        },
      }}
    >
      <Flex vertical gap={0} className='alt-card'>
        <Flex vertical gap='small'>
          <Text style={{ fontSize: '12px' }}> {date} </Text>
          <Text strong> {title}</Text>
          <Text style={{ fontSize: '12px' }}> {facility} </Text>
        </Flex>
        {items ? (
          <List
            size='small'
            split={false}
            dataSource={items}
            renderItem={(item) => (
              <List.Item >
                <Text style={{ fontSize: '12px' }}></Text> {item}
              </List.Item>
            )}
          />
        ) : null}
      </Flex>
    </ConfigProvider>
  );
}
