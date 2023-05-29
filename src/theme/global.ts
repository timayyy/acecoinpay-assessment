import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

   /**
   * We find it much easier to reason with border-box as the default box-sizing.
   */
   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   html {
      /**
    * The default font size for browsers is 16px.
    * We apply a size of 62.5% so that, by default, all math with rems will use
    * 10px as a base instead of 16px.
    */
        font-size: 62.5%;
        scroll-behavior: smooth;
   }

   body {
      background: url("./bg.jpg");
      background-repeat: no-repeat;
      background-position: left;
      font-family: "Poppins", sans-serif;
      // color: #00171f;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
`;

export { GlobalStyles };
