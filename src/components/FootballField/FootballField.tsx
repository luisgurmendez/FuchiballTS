import React from 'react';
import Canvas, { Path2D } from "react-native-canvas";
import {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';

import { drawFootballField, drawPlayer } from './drawingUtils';

export interface PlayerPosition {
  num: number | string;
  xPercent: number;
  yPercent: number;
};

interface FootballFieldProps {
  formation?: PlayerPosition[]
};

export const FootballField: React.FC<FootballFieldProps> = ({ formation }) => {


  const drawPlayers = (canvas: Canvas) => {

    if (formation) {
      formation.forEach(p => {
        drawPlayer(canvas, p)
      })

    }
  }

  const handleCanvas = (canvas: Canvas) => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    canvas.width = screenWidth - 10;
    canvas.height = canvas.width * 0.64;
    drawFootballField(canvas);
    drawPlayers(canvas)
  }

  return (
    <View style={styles.footballFieldContainer} >
      <Canvas ref={handleCanvas} />
    </View>
  )
}

const styles = StyleSheet.create({
  footballFieldContainer: {
    padding: 5,
    backgroundColor: '#060'
  }
});

