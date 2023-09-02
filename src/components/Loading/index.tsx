import React from 'react'
import { Modal, SafeAreaView, View } from 'react-native'
import LottieView from 'lottie-react-native'

import styles from './styles'

type LoadingProps = {
  isVisible: boolean
}

const Loading: React.FC<LoadingProps> = ({
  isVisible
}: LoadingProps) => {
  const rocketAnimationURL = '../../../assets/animations/rocket.json'

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
          source={require(rocketAnimationURL)}
          autoPlay
          loop
        />
      </SafeAreaView>
    </Modal>
  )
}

export default Loading