import React from 'react';

import { Text as DefaultText, TextProps } from 'react-native';

import { useThemeColors } from '../../hooks/useThemeColors';
import { fontFamily, fontSizes } from '../../theme/Fonts';

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const { colors } = useThemeColors();

  return (
    <DefaultText
      style={[
        { color: colors.text },
        { fontFamily: fontFamily.Poppins },
        { fontSize: fontSizes.font_16 },
        style,
      ]}
      {...otherProps}
    />
  );
};
