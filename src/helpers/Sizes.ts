import { Dimensions, ScaledSize } from 'react-native'

type SizeProps = {
  width: number
  height: number
}

class Sizes {
  screenDimensions: ScaledSize
  windowDimensions: ScaledSize

  constructor() {
    this.screenDimensions = Dimensions.get('screen')
    this.windowDimensions = Dimensions.get('window')
  }

  screen(): SizeProps {
    return {
      width: this.screenDimensions.width,
      height: this.screenDimensions.height
    }
  }

  window(): SizeProps {
    return {
      width: this.windowDimensions.width,
      height: this.windowDimensions.height
    }
  }
}

export default Sizes;