interface WithId {
  id: string;
}

interface ByIds<T> {
  [tId: string]: T;
}

export interface Normalized<T> {
  byIds: ByIds<T>;
  allIds: string[];
}

export function normalize<T extends WithId>(entities: T[]): Normalized<T> {
  const byIds: ByIds<T> = {};
  const allIds: string[] = [];
  entities.forEach(e => {
    byIds[e.id] = e;
    allIds.push(e.id);
  });
  return {
    byIds,
    allIds,
  };
}