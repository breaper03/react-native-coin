import { Dimensions, Falsy, RegisteredStyle, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { theme } from '../theme'

interface Props {
  children: React.ReactNode
  callback: () => void
  styles: any
  buttonWidth: number
  buttonHeight: number
}

export const StyledButton: React.FC<Props> = ({children, callback, buttonWidth, buttonHeight, styles}) => {
  return (
    <TouchableOpacity 
      style={[styls.container, styles, {width: width * buttonWidth, height: height * buttonHeight}]}
      onPress={callback}
    >
      {children}
    </TouchableOpacity>
  )
}

const {width, height} = Dimensions.get("window")

const styls = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blue,
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
})