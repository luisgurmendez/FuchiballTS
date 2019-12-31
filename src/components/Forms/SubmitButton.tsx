import React from "react";
import { TouchableOpacityProps, Text } from "react-native";
import styled from "styled-components/native";
import { Loader } from "../Loader/Loader";

const ButtonBase = styled.TouchableOpacity`
  background-color: #4684f0;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
`
const ButtonTitle = styled.Text`
  color: white;
  font-size: 20;
  text-align: center;
`

interface SubmitButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  title: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ loading, title, ...rest }) => {
  return (
    <ButtonBase {...rest}>
      <ButtonTitle> {loading ? <Loader /> : title}</ButtonTitle>
    </ButtonBase>

  )
}