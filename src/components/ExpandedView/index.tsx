import React from 'react'
import { Modal, SafeAreaView, Text, View } from "react-native";
import { X } from 'react-native-feather'
import ImageViewer from 'react-native-image-zoom-viewer'
import IconButton from '../IconButton'
import styles, {extraStyles} from './styles'

type ExpandedViewProps = {
  isVisible: boolean
  imageHdUrl: string
  imageUrl: string
  imageTitle: string
  onClose: () => void
}

const ExpandedView: React.FC<ExpandedViewProps> = ({
   isVisible, onClose, imageUrl, imageHdUrl, imageTitle
}: ExpandedViewProps) => {
  const uri =
    'https://c4.wallpaperflare.com/wallpaper/535/845/69/digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-preview.jpg';

  return (
    <Modal
      animationType="fade"
      transparent={false}
      statusBarTranslucent={true}
      visible={isVisible}>
      <SafeAreaView
        style={{
          paddingTop: 16,
          ...styles.modalBody
        }}>
        <View style={styles.modalHeader}>
          <Text numberOfLines={1} style={styles.modalHeaderTitle}>{imageTitle}</Text>
          <IconButton
            Icon={X}
            iconColor={extraStyles.iconColor}
            onPress={onClose}
          />
        </View>

        <View style={styles.modalContent}>
          <ImageViewer
            style={styles.modalImage}
            imageUrls={[{url: imageHdUrl ?? imageUrl}]}
            useNativeDriver={true}
            enableSwipeDown={false}
            saveToLocalByLongPress={false}
          />
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default ExpandedView
