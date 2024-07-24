import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  I18nManager,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { fontFamily, fontSizes } from '../../theme/Fonts';
import { Text, View } from '../themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import PhoneInput from 'react-native-phone-number-input';

import { useThemeColors } from '../../hooks/useThemeColors';
import { Borders } from '../../theme/Borders';
const TextInputs = React.memo(
  ({
    title,
    placeholder,
    showEye,
    phoneInput,
    onChange,
    titleShow,
    onChangephone,
    value,
    error,
    home,
    login,
    phoneInputCLear,
    isPortrait,
    required,
    ...props
  }: any) => {
    const [showPassword, setShowPassword] = React.useState(true);
    const { colors } = useThemeColors();
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
            marginTop: props?.comment ? '2%' : '5%',
          },
        ]}
      >
        {props?.hidetitle ? null : !titleShow && login ? (
          <View style={styles.txtContainer}>
            <Text style={[styles.txt]}>{title}</Text>
          </View>
        ) : (
          <View style={styles.txtContainer}>
            <Text style={[styles.txt]}>
              {title}
              {required ? '*' : null}
            </Text>
          </View>
        )}
        <View
          style={[
            styles.txtInput,
            { height: !titleShow && home ? 50 : props?.multiline ? 170 : 60 },
            { paddingVertical: props?.multiline ? 8 : 0 },
            {
              borderColor: home
                ? colors.home_border
                : error
                ? colors.red
                : colors.borderDrop,
            },

            { borderWidth: home ? 1 : 1 },
            { backgroundColor: colors.textInputBack },
          ]}
        >
          {phoneInput ? (
            <View style={styles.MainContainer}>
              <PhoneInput
                withDarkTheme={false}
                ref={phoneInputCLear}
                disableArrowIcon={props?.add ? true : false}
                placeholder={props?.delete ? 'Enter Number' : ''}
                textInputProps={{ placeholderTextColor: colors.borderDrop }}
                defaultCode="LB"
                layout={props?.add ? 'first' : 'first'}
                onChangeText={(text) => {
                  onChangephone(text);
                }}
                onChangeFormattedText={(text) => {
                  onChange(text);
                  console.debug('FORMATTED', text);
                }}
                value={value}
                containerStyle={{
                  backgroundColor: colors.textInputBack,
                  width: props?.add ? 220 : 270,
                }}
                countryPickerButtonStyle={{ width: props?.add ? 60 : 50 }}
                textContainerStyle={{
                  backgroundColor: 'transparent',
                  borderLeftColor: colors.borderDrop,
                  borderLeftWidth: props?.add ? 1 : 0,
                  height: 57,
                  width: 50,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 0,
                  marginBottom: -2.5,
                }}
                textInputStyle={{
                  fontFamily: fontFamily.Poppins,
                  fontSize: fontSizes.font_16,
                  height: 65,
                  marginTop: Platform.OS === 'ios' ? 0 : '1%',
                  color: colors.text,
                  writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
                }}
                codeTextStyle={{
                  fontFamily: fontFamily.Poppins,
                  fontSize: fontSizes.font_16,
                  color: colors.text,
                  marginLeft: props?.add ? 0 : 10,
                  width: props?.add ? 0 : 45,
                  height: 25,
                }}
                countryPickerProps={{ withAlphaFilter: false }}
                disabled={false}
              />
            </View>
          ) : null}

          {phoneInput ? null : (
            <TextInput
              {...props}
              onBlur={props?.onBlur}
              editable={props?.editable}
              multiline={props?.multiline ? true : false}
              placeholder={placeholder}
              placeholderTextColor={colors.borderDrop}
              style={[
                styles.placeholdertxt,
                { color: colors.text },
                { textAlignVertical: props?.multiline ? 'top' : 'center' },
              ]}
              secureTextEntry={showEye ? showPassword : false}
              keyboardType={
                phoneInput || props?.keyboard ? 'numeric' : 'default'
              }
              autoCapitalize={'none'}
              onChangeText={(e) => onChange(e)}
              value={value}
              returnKeyType={!titleShow && home ? 'search' : 'default'}
              onSubmitEditing={() => {
                !titleShow && home ? props.onFilter() : {};
              }}
            />
          )}

          {showEye ? (
            showPassword ? (
              <TouchableOpacity
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <Feather
                  name={'eye-off'}
                  size={25}
                  color={colors.borderDrop}
                  style={{ padding: isPortrait ? '3%' : '5%' }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <Feather
                  name={'eye'}
                  size={23}
                  color={colors.borderDrop}
                  style={{ padding: isPortrait ? '3%' : '5%' }}
                />
              </TouchableOpacity>
            )
          ) : null}
          {!titleShow && home ? (
            <>
              {props?.clearShow ? (
                <TouchableOpacity
                  style={[styles.close]}
                  onPress={() => props.onClear()}
                >
                  <AntDesign
                    name={'close'}
                    size={25}
                    color={colors.text}
                    style={styles.searchbtn}
                  />
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                style={[styles.search, { backgroundColor: colors.primary }]}
                onPress={() => {
                  props.onFilter();
                }}
              >
                <AntDesign
                  name={'search1'}
                  size={25}
                  color={colors.white}
                  style={styles.searchbtn}
                />
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </View>
    );
  }
);
const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
  search: {
    borderTopRightRadius: Borders.border_25,
    borderBottomRightRadius: Borders.border_25,
    margin: 0.5,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    borderTopRightRadius: Borders.border_25,
    borderBottomRightRadius: Borders.border_25,
    margin: 0.5,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendContainer: {
    borderTopRightRadius: Borders.border_25,
    borderBottomRightRadius: Borders.border_25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
  },
  MainContainer: {
    marginLeft: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },

  phoneInput: {
    marginLeft: '5%',

    borderLeftWidth: 1,
    height: '100%',
    padding: '5%',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  phoneNumberView: {
    width: '50%',
    height: 50,
  },
  resend: {
    fontFamily: fontFamily.Poppins,
    fontSize: fontSizes.font_14,
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  eyebtn: {},
  searchbtn: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    borderRadius: Borders.border_8,

    height: 60,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  placeholdertxt: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: fontFamily.Poppins,
    fontSize: fontSizes.font_16,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  txt: {
    fontFamily: fontFamily.Poppins,
    fontSize: fontSizes.font_16,
    marginBottom: '1%',
    textAlign: 'left',
  },
  txtContainer: {
    // alignSelf:I18nManager.isRTL ?'flex-start':'flex-end',
  },
});

export default TextInputs;
