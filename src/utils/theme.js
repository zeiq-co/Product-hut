import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#777',
  fire:'#da552f',
  pumpkin:'#fff',
  regentGray: '#9a9a9b',
  grayChateau: '#8f8f8f',
  blueColor: '#633991',
  backgroundColor: '#f3f3f3;',
};

export const sizes = {
  extraSmall: '14px',
  small: '22px',
  normal: '48px',
  medium: '28px',
  large: '52px',
};

export default {
  fontFamily: `'Poppins', sans-serif`,
  primary: colors.pumpkin,
  fire: colors.fire,
  white: colors.white,
  fontDark: colors.brightGray,
  fontLight: colors.regentGray,
  blueColor: colors.blueColor,
  labelColorDark: colors.regentGray,
  fieldGreyColor: colors.grey,
  fontSizeNormal: sizes.normal,
  fontSizeLarge: sizes.large,
  fontSizeMedium: sizes.medium,
  fontSizeSmall: sizes.small,
  fontSizeExtraSmall: sizes.extraSmall,
  backgroundColor: colors.backgroundColor,
};

createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif !important;
		margin: 0;
  	padding: 0;
  }
`;
