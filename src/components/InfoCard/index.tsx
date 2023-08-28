import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient'
import { Text, View } from 'react-native'
import styles from './styles'
import { colors } from '../../constants/theme'

type InfoCardProps = {
  imageTitle: string
  imageDate: string
  imageDescription: string
}

const InfoCard: React.FC<InfoCardProps> = ({
  imageTitle,
  imageDate,
  imageDescription
}: InfoCardProps) => (
  <LinearGradient style={styles.infoCard} colors={colors.gradient}>
    <View style={styles.infoCardSlideBar} />
    <View style={styles.infoCardContent}>
      <Text style={styles.infoCardDate}>{imageDate}</Text>
      <View style={styles.infoCardTitleContainer}>
        <Text style={styles.infoCardTitle}>{imageTitle}</Text>
      </View>
      <Text style={styles.infoCardText}>{imageDescription}</Text>
    </View>
  </LinearGradient>
)

export default InfoCard
