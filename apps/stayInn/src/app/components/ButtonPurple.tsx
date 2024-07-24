import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { Borders } from '../theme/Borders';
import { fontFamily, fontSizes } from '../theme/Fonts';
import { Text } from './themed';
export default function ButtonPurple({ title, onPress, }) {
  const { colors } = useThemeColors();
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colors.primary }]}
      onPress={() => onPress()}
    >
      <Text style={[styles.signIn,{color:colors.textWhite}]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  signIn: {
    fontFamily: fontFamily.Poppins,
    fontSize: fontSizes.font_16,
  },
  btn: {
    width: '100%',
    height: 60,
    borderRadius: Borders.border_8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'6%'
  },
});
