import { StyleSheet } from 'react-native'

import { colors } from '../../constants/theme'
import Sizes from '../../helpers/Sizes'

const sizes = new Sizes()
const sizeScale = 0.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: sizes.screen().width * sizeScale,
    height: sizes.screen().height * sizeScale
  },
})

export default styles