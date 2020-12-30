export interface BoardingPassDataRow {
  cols: string[];
}

export const dataMapMethod = (row: string): BoardingPassDataRow => {
  return { cols: Array.from(row) }
}
