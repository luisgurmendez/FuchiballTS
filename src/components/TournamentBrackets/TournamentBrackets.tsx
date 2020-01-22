import React from 'react';
import Canvas, { Path2D } from "react-native-canvas";
import {
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  borderWidth:1;
  borderColor:red;
`

interface TournamentBracketsProps { };

export const TournamentBrackets: React.FC<TournamentBracketsProps> = () => {

  const drawBrackets = (canvas: Canvas) => {
    const ctx = canvas.getContext('2d');


    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height - 1);
    ctx.fillStyle = "#060";
    ctx.fill();
    ctx.closePath();

    // Outer lines
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height)
    //@ts-ignore
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width / 2, 0)
    //@ts-ignore
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width / 2, canvas.height)
    //@ts-ignore
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2)
    //@ts-ignore
    ctx.stroke();
  }

  const handleCanvas = (canvas: Canvas) => {
    // const screenWidth = Math.round(Dimensions.get('window').width);
    if (canvas) {
      drawBrackets(canvas)
    }
  }

  return (
    <Container horizontal>
      <Canvas ref={handleCanvas} />
    </Container>
  )
}