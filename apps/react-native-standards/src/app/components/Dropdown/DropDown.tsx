import React from 'react';
import { I18nManager, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { fontSizes } from '../../theme/Fonts';
import DropDownIcon from './DropDownIcon';
import DropDownIconUp from './DropDownIconUp';
DropDownPicker.setLanguage(I18nManager.isRTL ? 'AR' : 'EN');
const DropDown = ({ ...props }: any) => (
  <DropDownPicker
    addCustomItem={true}
    onChangeSearchText={props?.onChangeSearchText}
    multiple={props?.multiple}
    ArrowDownIconComponent={() => <DropDownIcon />}
    ArrowUpIconComponent={() => <DropDownIconUp />}
    textStyle={[styles.DropDownTextStyle, { color: props.text }]}
    dropDownContainerStyle={[
      styles.DropDownContainerStyle,
      { backgroundColor: props.color },
    ]}
    selectedItemLabelStyle={{ fontWeight: 'bold' }}
    listItemLabelStyle={{
      fontSize: fontSizes.font_14,
      color: props?.textColor,
    }}
    onSelectItem={props?.onSelectItem}
    searchable={props?.searchable}
    searchTextInputStyle={[
      styles.SearchTextInputStyle,
      { color: props?.textColor },
    ]}
    searchContainerStyle={styles.SearchContainerStyle}
    placeholderStyle={{ color: props?.textColor }}
    mode="BADGE"
    showBadgeDot={false}
    listMode="SCROLLVIEW"
    scrollViewProps={{
      nestedScrollEnabled: true,
      persistentScrollbar: true,
    }}
    {...props}
  />
);
const styles = StyleSheet.create({
  DropDownPickerStyle: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    height: 60,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    // borderRadius: 15,
  },
  DropDownPickerStyleError: {
    borderColor: 'red',
    borderWidth: 1,
    height: 60,
  },
  DropDownTextStyle: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    fontFamily: 'Lato-Regular',
    paddingLeft: 10,
    paddingRight: 15,
    fontSize: 14,
  },
  DropDownContainerStyle: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    width: '100%',
    maxHeight: 160,
  },
  SearchTextInputStyle: {
    height: 40,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
  },
  SearchContainerStyle: {
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  BadgeTextStyle: {
    fontFamily: 'Lato-Regular',
    color: 'black',
  },
});
export default DropDown;
