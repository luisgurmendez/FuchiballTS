import styled from "styled-components/native";

export interface ShadowProps {
  shadowOpacity?: number;
  shadowRadius?: number;
}

export const Shadow = styled.View<ShadowProps>`
  shadow-opacity: ${props => props.shadowOpacity !== undefined ? props.shadowOpacity : '0.6'};
  shadow-radius: ${props => props.shadowRadius !== undefined ? `${props.shadowRadius}px` : '2px'};
  shadow-color: #000;
  shadow-offset: 0px 0px;
`