import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  // iconName: keyof typeof Feather.glyphMap,
  label: string,
  iconName: string,
  iconSize?: number,
  iconColor: string
}

export const defaultValues = {
  iconSize: 40
};

function IconButton({
  label,
  iconName,
  iconSize = defaultValues.iconSize,
  iconColor,
  onPress
}: IconButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/*<Feather name={iconName} size={iconSize} color={iconColor} />*/}
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

export default IconButton;