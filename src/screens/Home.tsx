import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Navbar from '../components/Navbar';
import { Icon } from "@rneui/themed"
import { Card, StyledInput, StyledText, StyledButton, StyledModal } from '../theme';
import { useCustomContext } from '../context/Context';
import { theme } from '../theme/theme';

export const Home = () => {

  const { actualTheme } = useCustomContext()

  const [texts, setText] = useState<{test: string}>({
    test: ""
  })

  const demoTouchableCard = () => {
    setVisible(true)
  }

  const demoOnChangeText = (name: string, text: string) => {
    const obj = {
      [name]: text
    }
    setText({
      ...texts, ...obj
    })
  }
  
  const [visible, setVisible] = useState(false)

  return (
    <>
      <StatusBar 
        style={actualTheme === "light" ? "dark" : "light"}
        animated={true} translucent={true} 
        backgroundColor={`${actualTheme === "light" ? theme.colors.white : theme.colors.black}`}
      />
      <View style={[styles.container, {flexDirection: 'column', backgroundColor: `${actualTheme === "light" ? theme.colors.white : theme.colors.gray}`}]}>
        <Navbar />
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <Card cardWidth={0.4} cardHeight={0.2} onPress={demoTouchableCard}>
            <StyledText
              color='#cd3939'
              fontSize='xl'
              fontWeight='bold'
            >Hello Card Touchable!!</StyledText>
          </Card>
          <Card cardWidth={0.4} cardHeight={0.2}>
            <StyledText
              color='black'
              fontSize='xl'
              fontWeight='bold'
            >Hello Card not Touchable!!</StyledText>
          </Card>
        </View>
        <View style={[styles.container, {flexDirection: 'row'}]}>
          <StyledInput
            name="test"
            value={texts.test}
            placeholder='Hello Input' 
            width={200} 
            onChange={demoOnChangeText}
          />
          <StyledButton 
            callback={() => setVisible(true)}
            styles={{backgroundColor: theme.colors.yellow, borderRadius: 10}}
            buttonHeight={0.06}
            buttonWidth={0.23}
          >
            <StyledText fontWeight='bold'>Open Modal</StyledText>
          </StyledButton>

          <StyledModal visible={visible} setVisible={setVisible} width={0.80} height={0.28}>
            <StyledText>Hello world</StyledText>
            <TouchableOpacity onPress={() => setVisible(false)} style={{backgroundColor: theme.colors.red, borderRadius: 100, padding: 5}}>
              <Icon type='material-icons' name='dangerous'/>
            </TouchableOpacity>
          </StyledModal>
        </View>
        <StyledText color='black'>{texts.test}</StyledText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1.4 * 16
  },
});