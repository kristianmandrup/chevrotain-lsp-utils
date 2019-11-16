import { tokenMap } from "./tokens";
import { TokenType } from "../error-message/node_modules/chevrotain";
const {
  Comment,
  ANON,
  LBracket,
  RBracket,
  LParen,
  RParen,
  WhiteSpace,
  TRUE,
  FALSE,
  Comma,
  Semicolon
} = tokenMap;

export const tokenTypes: TokenType[] = [
  Comment,
  ANON,
  LBracket,
  RBracket,
  LParen,
  RParen,
  WhiteSpace,
  TRUE,
  FALSE,
  Comma,
  Semicolon
  // ...
];
