module.exports = `
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const breakpoints = {
  values: {
    xs: 576,
    sm: 768,
    md: 990,
    lg: 1170,
    xl: 1920
  }
}

const palette = {
  action: {
    hover: '#2A6496'
  },
  divider: '#063c49',
  error: {
    main: '#E11F26'
  },
  primary: {
    main: '#063c49'
  },
  secondary: {
    dark: '#333333',
    medium: '#dedede',
    light: '#898989',
    main: '#009096'
  },
  custom: {
    footerGrey: '#E2DEDF',
    activeDot: '#428bca',
    activeState: '#0088ff',
    lgHintText: '#696671'
  }
}

const typography = {
  fontFamily: [
    'inherit'
  ].join(','),
  h5: {
    fontWeight: 'normal',
    fontFamily: 'inherit',
    fontSize: '25px',
    '@media (max-width:768px)': {
      fontSize: '22px'
    }
  },
  h6: {
    fontWeight: 'normal',
    fontFamily: 'inherit',
    '@media (max-width:768px)': {
      fontSize: '18px'
    }
  },
  subtitle2: {
    fontWeight: 'normal',
    fontFamily: 'inherit',
    fontSize: '18px',
    '@media (max-width:768px)': {
      fontSize: '16px'
    }
  },
  body1: {
    fontFamily: 'inherit',
    '@media (max-width:768px)': {
      fontSize: '14px',
      fontFamily: 'inherit'
    }
  },
  body2: {
    fontFamily: 'inherit',
    '@media (max-width:768px)': {
      fontSize: '12px',
      fontFamily: 'inherit'
    }
  },
  subtitle1: {
    fontSize: '12px',
    fontFamily: 'inherit',
    '@media (max-width:768px)': {
      fontSize: '10.5px',
      fontFamily: 'inherit'
    }
  },
  overline: {
    fontWeight: 'bold',
    fontFamily: 'inherit',
    fontSize: '1.5em',
    padding: '50px 0',
    textTransform: 'inherit'
  }
}

const props = {
  MuiButton: {
    disableFocusRipple: true
  }
}

const overrides = {
  MuiButton: {},
  MuiOutlinedInput: {
    root: {
      '&$focused $notchedOutline': {
        borderColor: '#2a6496',
        borderWidth: 1
      },
      '&:hover $notchedOutline': {
        borderColor: '#ccc',
        borderWidth: 1
      }
    }
  }
}

const muiTheme = createMuiTheme({
  breakpoints,
  palette,
  typography,
  props,
  overrides
})
const theme = responsiveFontSizes(muiTheme)

export default theme

`