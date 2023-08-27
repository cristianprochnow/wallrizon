import { StyleSheet } from 'react-native'
import { colors } from '../../constants/theme'

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: colors.backgroundDarker
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 8,
    height: 80
  },
  modalHeaderTitle: {
    color: colors.main100,
    fontFamily: 'Dosis_700',
    fontSize: 24,
    lineHeight: 32
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})

export const extraStyles = {
  iconColor: colors.main100
}

export default styles
