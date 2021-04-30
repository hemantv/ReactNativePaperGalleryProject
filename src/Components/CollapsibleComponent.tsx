import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {Surface} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CollapsibleComponentProps {
  children: ReactNode;
  collapsibleChildren: ReactNode;
}

const {width, height} = Dimensions.get('window');

const CollapsibleComponent = ({
  children,
  collapsibleChildren,
}: CollapsibleComponentProps) => {
  const [optionHeight, setOptionHeight] = useState(0);
  const panelHeightAnim = useRef(new Animated.Value(0)).current;

  const showPanel = (height: number) => {
    Animated.timing(panelHeightAnim, {
      toValue: height,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const hidePanel = () => {
    Animated.timing(panelHeightAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setOptionHeight(0);
    });
  };

  useEffect(() => {
    if (optionHeight) {
      showPanel(optionHeight);
    } else {
      hidePanel();
    }
  }, [optionHeight]);

  const onOptionLayout = (e: any) => {
    setOptionHeight(e.nativeEvent.layout.height + 16);
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <View onLayout={onOptionLayout}>{collapsibleChildren}</View>
      <Animated.View
        style={[
          styles.collapsible,
          {
            width: width,
            height: height - insets.bottom - insets.top,
            transform: [
              {
                translateY: panelHeightAnim,
              },
            ],
          },
        ]}>
        <Surface
          style={[
            styles.component,
            {
              marginBottom: insets.bottom,
            },
          ]}>
          {children}
        </Surface>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  collapsible: {
    position: 'absolute',
  },
  component: {
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});

export {CollapsibleComponent as Collapsible};
