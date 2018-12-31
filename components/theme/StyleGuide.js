const gray = '#CCCCCC'
const darkGray = '#999999'

const tiny = 8
const small = 16

const borderRadius = tiny

const shadow = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.18,
  shadowRadius: 2,
  backgroundColor: 'white',
}

const styleGuide = {
  palette: {
    black: 'black',
    white: 'white',
    transparent: 'transparent',
    darkGray,
    gray,
    lightGray: '#F3F3F3',
  },
  typography: {
    body: {
      fontSize: 17,
      lineHeight: 20,
      fontFamily: 'SFProText-Regular',
    },
    callout: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'SFProText-Regular',
    },
    caption: {
      fontSize: 11,
      lineHeight: 13,
      fontFamily: 'SFProText-Regular',
    },
    footnote: {
      fontSize: 13,
      lineHeight: 18,
      fontFamily: 'SFProText-Regular',
      color: darkGray,
    },
    headline: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: 'SFProText-Semibold',
    },
    subhead: {
      fontSize: 15,
      lineHeight: 20,
      fontFamily: 'SFProText-Regular',
    },
    title1: {
      fontSize: 34,
      lineHeight: 41,
      fontFamily: 'SFProText-Bold',
    },
    title2: {
      fontSize: 28,
      lineHeight: 34,
      fontFamily: 'SFProText-Bold',
    },
    title3: {
      fontSize: 22,
      lineHeight: 26,
      fontFamily: 'SFProText-Bold',
    },
  },
  spacing: {
    tiny,
    small,
    base: 24,
    large: 48,
    xLarge: 64,
  },
  styles: {
    barHeight: {
      height: 45,
    },
    shadow,
    borderRadius: {
      borderRadius,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#ebebeb',
    },
    button: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: small,
      padding: tiny,
      borderRadius,
    },
    buttonIcon: {
      marginRight: tiny,
    },
  },
}

export default styleGuide
