import "styled-components";

import { colors } from "./colors";

type ColorTokens = Partial<typeof colors>;

declare module "styled-components" {
  export interface DefaultTheme {
    colors?: ColorTokens;
  }
}
