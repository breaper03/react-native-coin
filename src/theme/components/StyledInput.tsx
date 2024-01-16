import React from 'react'
import { StyleSheet } from 'react-native'
import { theme } from '../theme'
import { TextInput } from 'react-native-paper';
import { themes, useCustomContext } from '../../context/Context';

interface Props {
  isDisable?: boolean
  isLoading?: boolean
  label?: string
  placeholder: string
  name: string
  value: string | number
  width: number
  onChange: (name: string, value: string) => void
}

export const StyledInput: React.FC<Props> = ({placeholder, width, onChange, name, value, isDisable, isLoading, label}) => {

  const {actualTheme} = useCustomContext()

  return (
    <>
      <TextInput
        mode='outlined'
        // label={placeholder}
        placeholder={placeholder}
        onChangeText={(value) => onChange("test", value)}
        // secureTextEntry={!pwdVisible.loginPwd}
        outlineColor={theme.colors.blue}
        textColor={theme.colors.blue}
        // placeholderTextColor={theme.colors.blue}
        contentStyle={{color: theme.colors.blue}}
        activeOutlineColor={theme.colors.blue}
        style={{width: typeof width === "number" ? width : `${width}`}}
        outlineStyle={{borderRadius: width * 0.06, backgroundColor: `${actualTheme === themes.light ? "#00000011" : "#ffffffcc"}`}}
        // selectTextOnFocus={true}
        blurOnSubmit={true}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    elevation: 3,
  },
});