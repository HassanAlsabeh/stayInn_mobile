import React from 'react';

import {Text as DefaultText, TextProps} from 'react-native';

import {useThemeColors} from '../../hooks/useThemeColors';

export const Title = (props: TextProps) => {
  const {style, ...otherProps} = props;
  const {colors} = useThemeColors();

  return <DefaultText style={[{color: colors.black}, style]} {...otherProps} />;
};
