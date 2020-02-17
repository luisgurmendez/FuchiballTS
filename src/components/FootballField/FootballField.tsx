import React from 'react';
import Canvas, { Path2D } from "react-native-canvas";
import {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import { drawFootballField, drawPlayer } from './drawingUtils';
import { Formation } from './formationUtils';

interface FootballFieldProps {
  formation?: Formation;
  formationColor?: string;
  striped?: boolean;
  size?: number;
};

export const FootballField: React.FC<FootballFieldProps> = ({ formation, formationColor, striped, size }) => {

  const drawPlayers = (canvas: Canvas) => {

    if (formation) {
      formation.forEach(p => {
        drawPlayer(canvas, p, formationColor)
      })
    }
  }

  const handleCanvas = (canvas: Canvas) => {
    const width = size !== undefined ? size : Math.round(Dimensions.get('window').width);
    if (canvas) {
      canvas.width = width - 10;
      canvas.height = canvas.width * 0.64;
      drawFootballField(canvas, { striped: striped });
      drawPlayers(canvas)
    }
  }

  return (
    <View style={styles.footballFieldContainer}>
      <Canvas ref={handleCanvas} />
    </View>
  )
}

const styles = StyleSheet.create({
  footballFieldContainer: {
    padding: 5,
    backgroundColor: '#060',
  }
});

