import { DefaultTheme } from 'styled-components';

const myDefaultTheme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    pageBackground: '#221B3A',
    button: {
      basic: '#7860D7',
      active: '#05C9B7',
      disabled: '#544E69',
    },
    footer: {
      text: '#8D7FBC',
    },
    modal: {
      background: '#2B224A',
      closeIcon: '#C3B8E8',
      title: '#FFFFFF',
      columnHeader: '#A094C6',
      columnElements: '#D2CBE9',
    },
    scrollbar: {
      main: '#53477D',
      background: '#221A3C',
    },
    gradients: {
      card: {
        partial: 'linear-gradient(360deg, #2B224A 0%, rgba(43, 34, 74, 0) 100%)',
        full: 'linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%)',
      },
      modal: {
        bottom: 'linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, #2B224A 100%);',
      },
      decoration: {
        rings: 'linear-gradient(180deg, #2B2347 0%, #221B3A 100%);',
      },
    },
  },
  radius: {
    extraSmall: '4px',
    small: '8px',
    medium: '16px',
    round: '50%',
  },
  typography: {
    fontSize: {
      extraSmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
    },
    lineHeight: {
      extraSmall: 1.333,
      small: 1.42,
      medium: 1.5,
      large: 1.6,
    },
    fontWeight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
  },
  dimension: {
    layout: {
      container: {
        maxWidth: '1126px',
      },
      cardsGrid: {
        maxWidth: '21.875rem',
        columnGap: '30px',
        rowGap: '32px',
      },
      footer: {
        minHeight: '84px',
      },
      header: {
        minHeight: '84px',
      },
    },
    decoration: {
      ringSize: '346px',
    },
    modal: {
      maxWidth: '540px',
      height: '360px',
      width: '90%;',
    },
    animation: {
      planet: {
        maxWidth: '375px',
      },
    },
  },
  media: {
    width: {
      extraLarge: '@media (min-width: 600px)',
    },
  },
  timing: {
    short: 0.2,
  },
};

export { myDefaultTheme };
