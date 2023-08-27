import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {Text, View} from 'react-native';
import styles from './styles';
import {colors} from '../../constants/theme';

const InfoCard: React.FC = () => (
  <LinearGradient style={styles.infoCard} colors={colors.gradient}>
    <View style={styles.infoCardSlideBar} />
    <View style={styles.infoCardContent}>
      <Text style={styles.infoCardDate}>23/07/2023</Text>
      <View style={styles.infoCardTitleContainer}>
        <Text style={styles.infoCardTitle}>The Antikythera Mechanism</Text>
      </View>
      <Text style={styles.infoCardText}>
        It does what? No one knew that 2,000 years ago, the technology existed
        to build such a device. The Antikythera mechanism, pictured, is now
        widely regarded as the first computer. Found at the bottom of the sea
        aboard a decaying Greek ship, its complexity prompted decades of study,
        and even today some of its functions likely remain unknown. X-ray images
        of the device, however, have confirmed that a main function of its
        numerous clock-like wheels and gears is to create a portable,
        hand-cranked, Earth-centered, orrery of the sky, predicting future star
        and planet locations as well as lunar and solar eclipses. The corroded
        core of the Antikythera mechanism's largest gear is featured, spanning
        about 13 centimeters, while the entire mechanism was 33 centimeters
        high, making it similar in size to a large book. Recently, modern
        computer modeling of missing components is allowing for the creation of
        a more complete replica of this surprising ancient machine.
      </Text>
    </View>
  </LinearGradient>
);

export default InfoCard;
