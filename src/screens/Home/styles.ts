import { StyleSheet, Dimensions } from 'react-native'
import {colors} from '../../constants/theme'

const screenDimensions = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    width: screenDimensions.width,
    height: screenDimensions.height * 0.8,
    position: 'relative'
  },
  heroImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  heroGradientContainer: {
    position: 'absolute',
    bottom: 0,
    width: screenDimensions.width,
    height: 120
  },
  heroGradient: {
    flex: 1
  },
  content: {
    width: screenDimensions.width,
    marginTop: 16
  },
  buttonsToolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonsToolbarCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
  infoWrapper: {
    width: '88%'
  }
})

export default styles
