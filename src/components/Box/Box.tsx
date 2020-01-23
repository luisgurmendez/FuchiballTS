import styled from 'styled-components/native';

interface BoxProps {
  m?: string;
  mTop?: string;
  mBottom?: string;
  mLeft?: string;
  mRight?: string;
  mHorizontal?: string;
  mVertical?: string;
  p?: string;
  pTop?: string;
  pBottom?: string;
  pLeft?: string;
  pRight?: string;
  pHorizontal?: string;
  pVertical?: string;
}

export const Box = styled.View<BoxProps>`
  ${props => props.m !== undefined && `margin: ${props.m}`};
  ${props => props.mHorizontal !== undefined && `marginHorizontal: ${props.mHorizontal}`};
  ${props => props.mVertical !== undefined && `marginVertical: ${props.mVertical}`};
  ${props => props.mTop !== undefined && `marginTop: ${props.mTop}`};
  ${props => props.mBottom !== undefined && `marginBottom: ${props.mBottom}`};
  ${props => props.mLeft !== undefined && `marginLeft: ${props.mLeft}`};
  ${props => props.mRight !== undefined && `marginRight: ${props.mRight}`};
  ${props => props.p !== undefined && `padding: ${props.p}`};
  ${props => props.pHorizontal !== undefined && `paddingHorizontal: ${props.pHorizontal}`};
  ${props => props.pVertical !== undefined && `paddingVertical: ${props.pVertical}`};
  ${props => props.pTop !== undefined && `paddingTop: ${props.pTop}`};
  ${props => props.pBottom !== undefined && `paddingBottom: ${props.pBottom}`};
  ${props => props.pLeft !== undefined && `paddingLeft: ${props.pLeft}`};
  ${props => props.pRight !== undefined && `paddingRight: ${props.pRight}`};
`
