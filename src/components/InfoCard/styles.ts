import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';

const styles = StyleSheet.create({
  infoCard: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  infoCardSlideBar: {
    height: 8,
    width: '60%',
    backgroundColor: '#FFF',
    opacity: 0.32,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  infoCardContent: {
    marginTop: 32,
  },
  infoCardDate: {
    color: colors.main100,
    fontFamily: 'Dosis_300',
    fontSize: 16,
    lineHeight: 32,
  },
  infoCardTitleContainer: {
    width: '80%',
  },
  infoCardTitle: {
    color: colors.main100,
    fontFamily: 'Dosis_700',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 24,
  },
  infoCardText: {
    color: colors.main100,
    fontFamily: 'Dosis_400',
    fontSize: 18,
    lineHeight: 32,
  },
});

export default styles;
