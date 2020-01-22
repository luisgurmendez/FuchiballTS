import styled from "styled-components/native";

export const Border = styled.View<{ color?: string }>`
  border: 1px solid ${props => props.color ? props.color : 'red'};
  width: 100%;
  `