import styled from "styled-components/native";

interface MarginProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginHorizontal?: string;
  marginVertical?: string;
  margin?: string;
}

export const Margin = styled.View<MarginProps>`
  margin-top: ${props => props.marginTop || props.marginVertical || props.margin ? props.marginTop || props.marginVertical || props.margin : '0'}px;
  margin-bottom: ${props => props.marginBottom || props.marginVertical || props.margin ? props.marginBottom || props.marginVertical || props.margin : '0'}px;
  margin-left: ${props => props.marginLeft || props.marginVertical || props.margin ? props.marginLeft || props.marginHorizontal || props.margin : '0'}px;
  margin-right: ${props => props.marginRight || props.marginVertical || props.margin ? props.marginRight || props.marginHorizontal || props.margin : '0'}px;
  `
