import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from 'react-native'
import Dates from '../../helpers/Dates'
import { LinearGradient } from 'react-native-linear-gradient'
import RNFetchBlob from 'rn-fetch-blob'
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Download
} from 'react-native-feather'

import IconButton, {
  defaultValues as defaultsIconButton,
} from '../../components/IconButton'
import { colors } from '../../constants/theme'
import styles from './styles'
import InfoCard from '../../components/InfoCard'
import ExpandedView from '../../components/ExpandedView'
import NasaAPOD from '../../services/NasaAPOD'
import Loading from '../../components/Loading'

const Home: React.FC = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [isModalVisible, setModalVisible] = useState(false)
  const [imageUrl, setImageUrl] = useState('');
  const [hdImageUrl, setHdImageUrl] = useState('');
  const [imageDate, setImageDate] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [loadingTest, setLoadingTest] = useState(true);

  const dates = new Dates();
  const nasaApod = new NasaAPOD();

  const iconSizeArrowButton = defaultsIconButton.iconSize * 0.8

  useEffect(() => {
    fetchView();
  }, [viewDate])

  async function fetchView() {
    setLoading(true)
    const viewData = await nasaApod.fetchByDay(viewDate)

    if (viewData.error) {
      return Alert.alert(
        'Erro ao carregar os dados',
        `Ocorreu um erro e não foi possível carregar os dados desejados.\n\n\nDetalhes do erro: [(${viewData.error.code}) ${viewData.error.message}].`,
        [
          {
            text: 'Tentar novamente',
            onPress: fetchView
          },
          { text: 'Entendi' }
        ]
      );
    }

    if (viewData) {
      setImageUrl(viewData.url)
      setHdImageUrl(viewData.hdurl)
      setImageDate(dates.formatDate(new Date(viewData.date), 'D/M/Y'))
      setImageDescription(viewData.explanation)
      setImageTitle(viewData.title)
    }
    setLoading(false)
  }

  function onOpenModal() {
    setModalVisible(true)
  }

  function onCloseModal() {
    setModalVisible(false)
  }

  function onSaveToGallery() {
    Alert.alert(
      'Baixar imagem do dia',
      'Confirma o Download da imagem do dia?',
      [
        { text: 'Cancelar' },
        {
          text: 'Confirmar',
          onPress: saveToGallety
        }
      ]
    )
  }

  function saveToGallety() {
    const imageName = (new Date()).getTime()
    const blobDirs = RNFetchBlob.fs.dirs
    const picturePath = blobDirs.PictureDir + '/' + imageName + '.png'

    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
      indicator: true,
      IOSBackgroundTask: true,
      path: picturePath,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: picturePath,
        description: 'Imagem do Dia da NASA'
      }
    }).fetch('GET', hdImageUrl ?? imageUrl).then(response => {
      let filePath = ''

      if (response && response.data) {
        filePath = response.data
      }

      if (!filePath) {
        return Alert.alert(
          'Erro na imagem do dia',
          'Ocorreu um erro e não foi possível salvar a imagem do dia. Por favor, tente novamente mais tarde'
        )
      }

      Alert.alert(
        'Sucesso na imagem do dia',
        'Imagem salva com sucesso!',
        [
          { text: 'Entendi' }
        ]
      )
    })
  }

  function onPreviousDay() {
    setViewDate(dates.decrementDate(viewDate));
  }

  function onNextDay() {
    setViewDate(dates.incrementDate(viewDate));
  }

  return (
    <>
      <ExpandedView
        isVisible={isModalVisible}
        onClose={onCloseModal}
        imageUrl={imageUrl}
        imageHdUrl={hdImageUrl}
        imageTitle={imageTitle}
      />
      <Loading isVisible={loadingTest} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          {
            (isLoading) ? (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.heroImage
              }}>
                <ActivityIndicator
                  size="large"
                  color={colors.main500}
                />
              </View>
            ) : (
              <Image style={styles.heroImage} source={{ uri: imageUrl }} />
            )
          }
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
                onPress={onPreviousDay}
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
                onPress={onNextDay}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrapper}>
              <InfoCard
                imageDescription={imageDescription}
                imageTitle={imageTitle}
                imageDate={imageDate}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Home;
