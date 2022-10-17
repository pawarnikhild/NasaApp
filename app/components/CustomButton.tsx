import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstants';

type CustonButtonProps = {
  title: string;
  style: any;
  buttonDisabled?: boolean;
  onPress: () => void;
};

const CustomButton = (props: CustonButtonProps) => {
  const color = !props.buttonDisabled ? AppColor.buttonColor : AppColor.grey;
  console.log(props.buttonDisabled)
  return (
    <Pressable
      style={
        ({pressed}) => [
        {backgroundColor: color},
        {opacity: pressed && !props.buttonDisabled ? 0.5 : null},
        {...styles.customButton, ...props.style},
      ]
    }
      disabled={props.buttonDisabled}
      onPress={props.onPress}
    >
      <Text style={styles.large}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    paddingVertical: 10,
    borderRadius: 6,
    justicyContent: 'center',
    alignItems: 'center',
  },
  large: {
    color: AppColor.white,
    fontSize: FontSize.large,
  },
});
