import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Feather} from 'react-native-feather';
import styles from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  iconSize?: number;
  iconColor: string;
  Icon: typeof Feather;
}

export const defaultValues = {
  iconSize: 40,
  iconColor: 'currentColor',
};

function IconButton({
  iconSize = defaultValues.iconSize,
  iconColor = defaultValues.iconColor,
  Icon,
  onPress,
}: IconButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/*<Feather name={iconName} size={iconSize} color={iconColor} />*/}
      <Icon width={iconSize} height={iconSize} stroke={iconColor} />
    </TouchableOpacity>
  );
}

export default IconButton;
