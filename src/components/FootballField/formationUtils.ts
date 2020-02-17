export interface PlayerPosition {
  num: number | string;
  xPercent: number;
  yPercent: number;
};

export type Formation = PlayerPosition[]

// 4-3-3
export const formation433: Formation = [

  { num: 1, xPercent: 5, yPercent: 50 },

  { num: 3, xPercent: 30, yPercent: 10 },
  { num: 2, xPercent: 20, yPercent: 35 },
  { num: 4, xPercent: 20, yPercent: 65 },
  { num: 6, xPercent: 30, yPercent: 90 },

  { num: 5, xPercent: 50, yPercent: 35 },
  { num: 14, xPercent: 40, yPercent: 50 },
  { num: 18, xPercent: 50, yPercent: 65 },

  { num: 10, xPercent: 70, yPercent: 10 },
  { num: 9, xPercent: 75, yPercent: 50 },
  { num: 11, xPercent: 70, yPercent: 90 },
];



export const mirrorFormation = (formation: Formation) => {
  return formation.map(pp => ({ num: pp.num, xPercent: 100 - pp.xPercent, yPercent: 100 - pp.yPercent }));
}