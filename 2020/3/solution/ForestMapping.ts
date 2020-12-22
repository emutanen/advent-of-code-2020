export interface ForestDataRow {
  cols: string[];
}

export const dataMapMethod = (row: string): ForestDataRow => {
  return { cols: Array.from(row) }
}
