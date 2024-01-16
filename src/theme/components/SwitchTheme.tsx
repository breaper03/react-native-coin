import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/themed';
import { useCustomContext } from "../../context/Context"
import { themes } from '../../context/Context';
import { Switch } from '@rneui/themed';
import {theme} from '../theme';

const SwitchTheme: React.FC = () => {

  const { actualTheme, setTheme } = useCustomContext()

  const onChangeTheme = () => {
    const actualThemes = actualTheme
    console.log("actualTheme", actualThemes)

    if (actualTheme === themes.light) setTheme(themes.dark)
    if (actualTheme === themes.dark) setTheme(themes.light)
  }

  return (
    <>
      <Switch
        value={actualTheme === themes.light ? false : true}
        onChange={onChangeTheme}
        color={theme.colors.blue}
      />
      <View
        style={[styles.container, {backgroundColor: `${actualTheme === themes.light ? theme.colors.gray : theme.colors.gray}`}]}
        // onPress={onChangeTheme}
      > 
        {
          actualTheme === themes.light
            ? <Icon name='weather-sunny' type='material-community' solid color={theme.colors.yellow}/>
            : <Icon name='moon' type="font-awesome-5" solid color={theme.colors.yellow}/>
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