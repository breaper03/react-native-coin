import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Constants from "expo-constants"
import { theme } from '../theme/theme'
import SwitchTheme from '../theme/components/SwitchTheme'
import { Icon } from '@rneui/themed'
import { useCustomContext } from '../context/Context'
import { StyledText } from '../theme'

const Navbar = () => {
  
  const { actualTheme } = useCustomContext();

  return (
    <View style={[styles.container, {width: "100%", backgroundColor: `${actualTheme === "dark" ? theme.colors.black : theme.colors.white}`}]}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: "49%"}}>
        <TouchableOpacity
          style={[styles.notificationContainer, {flexDirection: 'row', backgroundColor: `${actualTheme === "dark" ? theme.colors.gray : theme.colors.lightGray}`, alignItems: 'center', justifyContent: 'space-between', width: width * 0.35, paddingRight: 15}]}
        > 
          <Icon name='user-circle' type='font-awesome-5' solid color={theme.colors.blue} size={27}/>
          <StyledText color={actualTheme === "dark" ? theme.colors.white : theme.colors.gray} fontWeight='bold' >UserName</StyledText>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 20}}>
        <SwitchTheme />
        <TouchableOpacity
          style={[styles.notificationContainer, {backgroundColor: `${actualTheme === "dark" ? theme.colors.gray : theme.colors.lightGray}`}]}
        > 
          <Icon name='bell' type='material-community' solid color={theme.colors.blue}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight -2,
    height: height * 0.085,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 3,
    elevation: 3
  },
  notificationContainer: {
    padding: 16 * 0.5,
    borderRadius: 16 * 2,
  }
})