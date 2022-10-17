import React from 'react'
import { StyleSheet, TextInput, ViewStyle } from 'react-native'

import { AppColor, FontSize } from '../utils/StyleConstants'

type CustomInputProps = {
    placeholder: string
    placeholderColor: string
    value: string
    style: ViewStyle

    onChangeText: (active: string) => void
}
const CustomTextInput = (props: CustomInputProps) => {
  return (
    <TextInput
        style={{...styles.CustomTextInput, ...props.style}}
        placeholder={props.placeholder}
        placeholderTextColor={ props.placeholderColor}
        value={props.value}
        onChangeText={props.onChangeText}
    />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    CustomTextInput: {
        backgroundColor: AppColor.white,
        borderWidth: 2,
        borderColor: AppColor.black,
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: FontSize.medium,
    }
})