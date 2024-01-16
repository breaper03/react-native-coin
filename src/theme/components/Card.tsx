import { Dimensions, Falsy, RegisteredStyle, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import { StyledText } from './StyledText'

interface Props {
  children: React.ReactNode,
  styles?: ViewStyle | Falsy | RegisteredStyle<View>
  cardHeight: number
  cardWidth: number
  onPress?: () => void
}

export const Card: React.FC<Props> = ({children, cardHeight, cardWidth, onPress}) => {
  const radius = cardHeight / cardWidth * 15

  const TouchableCard = onPress ? true : false

  return (
    <>
      {
        !TouchableCard
          ? (
            <View
              style={[styles.container, {height: height * cardHeight, width: width * cardWidth, borderRadius: radius}]}
            >
              {children}
            </View>
          )
          : (
            <TouchableOpacity
              onPress={onPress}
              style={[styles.container, {height: height * cardHeight, width: width * cardWidth, borderRadius: radius}]}
            >
              {children}
            </TouchableOpacity>
          )
      }
    </>
  )
}

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    elevation: 3,
    padding: 20,
    alignItems: 'center'
  }
})