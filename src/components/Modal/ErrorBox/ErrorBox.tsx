import { VFC } from 'react';

import * as S from './ErrorBox.styles';
import { ErrorBoxProps } from './ErrorBox.types';

export const ErrorBox: VFC<ErrorBoxProps> = ({ text }) => <S.Wrapper>{text}</S.Wrapper>;
