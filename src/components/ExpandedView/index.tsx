import React from 'react'
import { Modal, SafeAreaView, Text, View } from "react-native";
import { X } from 'react-native-feather'
import ImageViewer from 'react-native-image-zoom-viewer'
import IconButton from '../IconButton'
import styles, {extraStyles} from './styles'
import Loading from '../Loading';

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
            loadingRender={() => <Loading isVisible={true} />}
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
