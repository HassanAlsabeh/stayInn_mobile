import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TextInputs from '../components/textInputs/TextInputs';
import { Text, View } from '../components/themed';
import { useThemeColors } from '../hooks/useThemeColors';
import { Borders } from '../theme/Borders';
import { Controller, useForm } from 'react-hook-form';
import { fontFamily, fontSizes } from '../theme/Fonts';
import { useTranslation } from 'react-i18next';
import ButtonPurple from '../components/ButtonPurple';
import { ViewBack } from '../components/themed/View';
import i18n from '../i18n/i18n.config';
import ActivityIndicatorComponent from '../components/ActivityIndicator/ActivityIndicator';

export default function Login() {
  const { colors } = useThemeColors();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      phone: '',
      password: '',
      old_password: '',
      new_password: '',
      confirm_new_password: '',
    },
  });

  const { t } = useTranslation();

  const lang = i18n.language;

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    console.log('first');
  };

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get('screen').width
  );
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('screen').height
  );
  const updateWindowDimensions = () => {
    const { width, height } = Dimensions.get('screen');
    setWindowWidth(width);
    setWindowHeight(height);
  };

  useEffect(() => {
    // Listen for orientation changes and update dimensions
    Dimensions.addEventListener('change', updateWindowDimensions);

    // Cleanup listener when component unmounts
  }, []);
  const isPortrait = windowHeight > windowWidth;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.mainBackground },
        { alignSelf: 'center', justifyContent: 'center' },
      ]}
    >
      {isPortrait ? (
        <Image
          style={[
            {
              width: '85%',
              height: 100,
              position: 'absolute',
              marginTop: '5%',
              resizeMode: 'center',
            },
          ]}
          source={require('../assets/svg/logo.png')}
        />
      ) : (
        <Image
          style={[
            styles.img,
            {
              borderTopRightRadius:
                lang === 'en'
                  ? Borders.border_50
                  : Platform.OS === 'ios'
                  ? Borders.border_50
                  : 0,
              borderBottomRightRadius:
                lang === 'en'
                  ? Borders.border_50
                  : Platform.OS === 'ios'
                  ? Borders.border_50
                  : 0,
              borderTopLeftRadius:
                lang === 'ar'
                  ? Platform.OS === 'ios'
                    ? 0
                    : Borders.border_50
                  : 0,
              borderBottomLeftRadius:
                lang === 'ar'
                  ? Platform.OS === 'ios'
                    ? 0
                    : Borders.border_50
                  : 0,
            },
          ]}
          source={require('../assets/images/Background-Image.png')}
        />
      )}
      <View
        style={[
          styles.loginContainer,
          {
            backgroundColor: colors.loginCard,
            width: isPortrait ? '90%' : '35%',
          },
        ]}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ViewBack style={{ backgroundColor: colors.loginCard }}>
              <Text style={[styles.loginTitle, { color: colors.primary }]}>
                {t('login')}
              </Text>
              <Text style={[styles.enterAccount]}>
                {t('enter_your_account')}
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputs
                    isPortrait={isPortrait}
                    login={false}
                    title={`${t('phone_number')}`}
                    placeholder={`${t('phone_number')}`}
                    showEye={false}
                    phoneInput={true}
                    titleShow={true}
                    onChange={onChange}
                    onChangephone={(x) => {
                      console.log('second');
                    }}
                    value={value}
                    error={errors?.phone?.type === 'required' ? true : false}
                    home={false}
                  />
                )}
                name="phone"
              />
              {errors.phone && errors?.phone?.type === 'required' && (
                <Text style={styles.txtError}>{t('form_required')}</Text>
              )}
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputs
                    isPortrait={isPortrait}
                    login={false}
                    title={`${t('password')}`}
                    placeholder={`${t('enter_password')}`}
                    showEye={true}
                    phoneInput={false}
                    titleShow={true}
                    onChange={onChange}
                    value={value}
                    error={errors?.password?.type === 'required' ? true : false}
                    home={false}
                    onChangephone={() => {}}
                  />
                )}
                name="password"
              />
              {errors.password && errors?.password?.type === 'required' && (
                <Text style={styles.txtError}>{t('form_required')}</Text>
              )}
              <View style={{ height: 60, marginBottom: '6%' }}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 1000,
                    top: isPortrait ? '75%' : '55%',
                    backgroundColor: 'transparent',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  {isLoading ? (
                    <ActivityIndicatorComponent zindex={false} home={false} />
                  ) : null}
                </View>
                <ButtonPurple
                  title={isLoading ? '' : t('sign_in')}
                  onPress={handleSubmit(onSubmit)}
                />
              </View>

              <Text
                style={[styles.forgotTxt, { color: colors.forget }]}
                onPress={() => {
                  console.log('forget_password');
                }}
              >
                {t('forget_password')}
              </Text>
            </ViewBack>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },

  txtError: {
    marginLeft: '5%',
    marginTop: '2%',
    color: 'red',
    textAlign: 'left',
  },
  forgotTxt: {
    textAlign: 'right',
    marginTop: '3%',
    fontSize: fontSizes.font_16,
  },
  img: {
    resizeMode: 'cover',

    width: '45%',
    height: '100%',
  },
  loginContainer: {
    padding: '3%',
    borderRadius: Borders.border_8,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '35%',
    marginHorizontal: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginTitle: {
    fontSize: fontSizes.font_24,
    marginBottom: '4%',
    marginTop: '2%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: fontFamily.Poppins_bold,
  },
  enterAccount: {
    textAlign: 'left',
    fontSize: fontSizes.font_20,
    fontWeight: 'bold',
  },
});
