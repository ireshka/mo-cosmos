import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      pageBackground: string;
      button: {
        basic: string;
        active: string;
      };
      footer: {
        text: string;
      };
      modal: {
        closeIcon: string;
        title: string;
        columnHeader: string;
        columnElements: string;
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
        container: {
          maxWidth: string;
        };
      };
      decoration: {
        ringSize: string;
      };
      modal: {
        maxWidth: string;
        maxHeight: string;
      };
    };
    media: {
      width: {
        extraLarge: string;
      };
    };
  }
}
