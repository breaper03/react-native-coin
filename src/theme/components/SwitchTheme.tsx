import React from 'react'
import { StyleSheet, Appearance, View } from 'react-native'
import { Icon } from '@rneui/themed';
import { useCustomContext } from "../../context/Context"
import { Switch } from '@rneui/themed';
import {theme} from '../theme';

const SwitchTheme: React.FC = () => {

  const { actualTheme, onChangeTheme } = useCustomContext()

  const setTheme = () => {
    console.log("actualThemes", actualTheme)

    if (actualTheme === "light") onChangeTheme("dark")
    if (actualTheme === "dark") onChangeTheme("light")
  }

  return (
    <>
      <Switch
        value={actualTheme === "light" ? false : true}
        onChange={setTheme}
        color={theme.colors.blue}
      />
      <View
        style={[styles.container, {backgroundColor: `${actualTheme === "light" ? theme.colors.lightGray : theme.colors.gray}`}]}
        // onPress={onChangeTheme}
      > 
        {
          actualTheme === "light"
            ? <Icon name='sun' type='font-awesome-5' solid color={theme.colors.blue}/>
            : <Icon name='moon' type="font-awesome-5" solid color={theme.colors.blue}/>
        }
      </View>
    </>
  )
}

export default SwitchTheme

const styles = StyleSheet.create({
  container: {
    padding: 16 * 0.5,
    borderRadius: 16 * 2
  }
})