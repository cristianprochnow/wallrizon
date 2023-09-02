import React from 'react'
import { Modal, SafeAreaView, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

import styles from './styles'

type LoadingProps = {
  isVisible: boolean
}

const Loading: React.FC<LoadingProps> = ({
  isVisible
}: LoadingProps) => {
  const animationURL = '../../../assets/animations/astronaut.json'

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      statusBarTranslucent={true}
      transparent={true}
    >
      <SafeAreaView style={styles.container}>
        <LottieView
          style={styles.animation}
          source={require(animationURL)}
          autoPlay
          loop
          speed={7.2}
        />
      </SafeAreaView>
    </Modal>
  )
}

export default Loading