import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    sizes: {
      bigTitle: string;
      mediumTitle: string;
      smallTitle: string;
      fontSize: string;
    };

    fontSizes: {
      title: string;
      p: string;
      span: string;
      link: string;
    };
    colors: {
      primary: string;
      primaryGrainy: string;
      secondary: string;
      menuBackground: string;
      background: string;
      secondaryBackground: string;
      text: string;
      border: string;
    };
  }
}
