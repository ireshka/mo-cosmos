import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      pageBackground: string;
      button: {
        basic: string;
        active: string;
        disabled: string;
      };
      footer: {
        text: string;
      };
      modal: {
        background: string;
        closeIcon: string;
        title: string;
        tableHeader: string;
        tableElements: string;
        tableHeaderBackground: string;
        tableHeaderHoverBackground: string;
        errorBoxBorder: string;
      };
      scrollbar: {
        main: string;
        background: string;
      };
      gradients: {
        card: {
          partial: string;
          full: string;
        };
        modal: {
          bottom: string;
        };
        decoration: {
          rings: string;
        };
      };
    };
    radius: {
      extraSmall: string;
      small: string;
      medium: string;
      round: string;
    };
    typography: {
      fontSize: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
      };
      lineHeight: {
        extraSmall: number;
        small: number;
        medium: number;
        large: number;
      };
      fontWeight: {
        regular: number;
        semiBold: number;
        bold: number;
      };
    };
    dimension: {
      layout: {
        wrapper: {
          maxWidth: string;
        };
        cardsGrid: {
          maxWidth: string;
          columnGap: string;
          rowGap: string;
        };
        footer: {
          minHeight: string;
        };
        header: {
          minHeight: string;
        };
      };
      decoration: {
        ringSize: string;
      };
      modal: {
        maxWidth: string;
        height: string;
        width: string;
      };
      animation: {
        planet: {
          maxWidth: string;
        };
      };
    };
    media: {
      width: {
        extraLarge: string;
      };
    };
    timing: {
      short: number;
    };
  }
}
