import React, {useState} from 'react';
import {Banner} from 'react-native-paper';
import {Content} from '../../Components/ContentComponent';

const BannerScreen = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Content
      style={{
        padding: 0,
      }}>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}>
        There was a problem processing a transaction on your credit card.
      </Banner>
    </Content>
  );
};

export default BannerScreen;
