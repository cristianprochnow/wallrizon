import React from 'react';
import {
  Modal,
  Text,
  View
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import IconButton from '../IconButton';
import styles, { extraStyles } from './styles';

type ExpandedViewProps = {
  isVisible: boolean,
  onClose: () => void
};

function ExpandedView({ isVisible, onClose }: ExpandedViewProps): JSX.Element {
  const uri = 'https://c4.wallpaperflare.com/wallpaper/535/845/69/digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-preview.jpg';

  return (
    <Modal
      animationType="fade"
      transparent={false}
      statusBarTranslucent={true}
      visible={isVisible}>
        <View style={{
          paddingTop: 10,
          ...styles.modalBody
        }}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Titulo da Imagem</Text>
            <IconButton
              label="Fechar"
              iconName="x"
              iconColor={extraStyles.iconColor}
              onPress={onClose} />
          </View>

          <View style={styles.modalContent}>
            <ImageViewer
              style={styles.modalImage}
              imageUrls={[{ url: uri }]}
              useNativeDriver={true}
              enableSwipeDown={false}
              saveToLocalByLongPress={false} />
          </View>
        </View>
    </Modal>
  );
}

export default ExpandedView;