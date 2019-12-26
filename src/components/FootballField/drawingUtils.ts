import Canvas from "react-native-canvas";
import { PlayerPosition } from "./FootballField";

export function drawPlayer(canvas: Canvas, player: PlayerPosition) {

  const x = player.xPercent * canvas.width / 100;
  const y = player.yPercent * canvas.height / 100;

  const ctx = canvas.getContext('2d');
  ctx.beginPath()
  ctx.fillStyle = "#4d80e4"
  ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.fillStyle = '#FFF';
  ctx.beginPath()
  ctx.textAlign = 'center';
  ctx.fillText(player.num.toString(), x, y + 3);
  ctx.fill();

}

export function drawFootballField(canvas: Canvas) {

  const ctx = canvas.getContext('2d');

  // Outer lines
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height - 1);
  ctx.fillStyle = "#060";
  ctx.fill();
  ctx.closePath();

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#FFF";
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = "#FFF";

  const penaltyBoxSize = {
    w: canvas.width * 0.15,
    h: canvas.height * 0.6
  }

  const goalBoxSize = {
    w: penaltyBoxSize.w / 3,
    h: penaltyBoxSize.h * 0.45
  }

  //Home penalty box
  ctx.beginPath();
  ctx.rect(0, (canvas.height - penaltyBoxSize.h) / 2, penaltyBoxSize.w, penaltyBoxSize.h);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Home goal box
  ctx.beginPath();
  ctx.rect(0, (canvas.height - goalBoxSize.h) / 2, goalBoxSize.w, goalBoxSize.h);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Home goal 
  ctx.beginPath();
  ctx.moveTo(1, (canvas.height / 2) - (goalBoxSize.h * 0.39 / 2));
  ctx.lineTo(1, (canvas.height / 2) + (goalBoxSize.h * 0.39 / 2));
  ctx.lineWidth = 2;
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();
  ctx.lineWidth = 1;

  //Home penalty point
  ctx.beginPath()
  ctx.arc(penaltyBoxSize.w * 0.7, canvas.height / 2, 1, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.closePath();


  //Home half circle
  ctx.beginPath()
  ctx.arc(penaltyBoxSize.w * 0.7, canvas.height / 2, penaltyBoxSize.w / 2, 0.29 * Math.PI, 1.71 * Math.PI, true);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  // Mid line
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Mid circle
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.height / 2, penaltyBoxSize.w / 2, 0, 2 * Math.PI, false);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Mid point
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();


  //Away penalty box
  ctx.beginPath();
  ctx.rect(canvas.width - penaltyBoxSize.w, (canvas.height - penaltyBoxSize.h) / 2, penaltyBoxSize.w, penaltyBoxSize.h);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Away goal box
  ctx.beginPath();
  ctx.rect(canvas.width - goalBoxSize.w, (canvas.height - goalBoxSize.h) / 2, goalBoxSize.w, goalBoxSize.h);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Away goal 
  ctx.beginPath();
  ctx.moveTo(canvas.width - 1, (canvas.height / 2) - (goalBoxSize.h * 0.39 / 2));
  ctx.lineTo(canvas.width - 1, (canvas.height / 2) + (goalBoxSize.h * 0.39 / 2));
  ctx.lineWidth = 2;
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();
  ctx.lineWidth = 1;

  //Away penalty point
  ctx.beginPath()
  ctx.arc(canvas.width - penaltyBoxSize.w * 0.7, canvas.height / 2, 1, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.closePath();

  //Away half circle
  ctx.beginPath()
  ctx.arc(canvas.width - penaltyBoxSize.w * 0.7, canvas.height / 2, penaltyBoxSize.w / 2, 0.71 * Math.PI, 1.29 * Math.PI, false);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Home L corner
  ctx.beginPath()
  ctx.arc(0, 0, 8, 0, 0.5 * Math.PI, false);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Home R corner
  ctx.beginPath()
  ctx.arc(0, canvas.height, 8, 0, 2 * Math.PI, true);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Away R corner
  ctx.beginPath()
  ctx.arc(canvas.width, 0, 8, 0.5 * Math.PI, 1 * Math.PI, false);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();

  //Away L corner
  ctx.beginPath()
  ctx.arc(canvas.width, canvas.height, 8, 1 * Math.PI, 1.5 * Math.PI, false);
  // @ts-ignore
  ctx.stroke();
  ctx.closePath();
}