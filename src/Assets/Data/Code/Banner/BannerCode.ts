const BannerCode = () => `import React, {useState} from 'react';
import {View} from 'react-native';
import {Banner} from 'react-native-paper';

const BannerDemo = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View>
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
    </View>
  );
};

export default BannerDemo;
`;

export default BannerCode