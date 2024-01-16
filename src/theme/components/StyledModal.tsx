import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StyledText } from './StyledText'
import { theme } from '../theme'
import { Card } from './Card'

interface Props {
  children: React.ReactNode
  visible: boolean
  setVisible: (visible: boolean) => void
  width: number
  height: number
}

const StyledModal: React.FC<Props> = ({children, visible, setVisible, width, height}) => {
  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => setVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Card cardHeight={height} cardWidth={width}>
                {children}
              </Card>
            </View>
          </View>
        </Modal>
      </View>
    </>
  )
}

export default StyledModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    alignItems: 'center',
    gap:10,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
})