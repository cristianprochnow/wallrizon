import React, {useState} from 'react';
import {View, Image, ScrollView, SafeAreaView} from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Download
} from 'react-native-feather';
import IconButton, {
  defaultValues as defaultsIconButton,
} from '../../components/IconButton';
import {colors} from '../../constants/theme';
import styles from './styles';
import InfoCard from '../../components/InfoCard';
import ExpandedView from '../../components/ExpandedView';

const Home: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const uri = 'http://github.com/cristianprochnow.png';
  const iconSizeArrowButton = defaultsIconButton.iconSize * 0.8;

  function onOpenModal() {
    setModalVisible(true);
  }

  function onCloseModal() {
    setModalVisible(false);
  }

  function onSaveToGallery() {}

  return (
    <>
      <ExpandedView isVisible={isModalVisible} onClose={onCloseModal} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image style={styles.heroImage} source={{uri}} />
          <View style={styles.heroGradientContainer}>
            <LinearGradient
              style={styles.heroGradient}
              colors={colors.fadeDarker}
            />
          </View>
        </View>
        <SafeAreaView style={{paddingBottom: 16, ...styles.content}}>
          <View style={styles.buttonsToolbar}>
            <View>
              <IconButton
                Icon={ArrowLeft}
                iconColor={colors.main100}
                iconSize={iconSizeArrowButton}
              />
            </View>
            <View style={styles.buttonsToolbarCenter}>
              <IconButton
                Icon={Maximize2}
                onPress={onOpenModal}
                iconColor={colors.main100}
              />
              <IconButton
                Icon={Download}
                onPress={onSaveToGallery}
                iconColor={colors.main100}
              />
            </View>
            <View>
              <IconButton
                Icon={ArrowRight}
                iconColor={colors.main100}
                iconSize={iconSizeArrowButton}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrapper}>
              <InfoCard />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Home;
