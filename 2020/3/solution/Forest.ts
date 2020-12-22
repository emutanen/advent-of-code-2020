import { ForestDataRow } from './ForestMapping';

export class Forest {
  constructor(public rows: ForestDataRow[] = []) {
    this.rows = rows; // rows is created using FileReader<ForestDataRow>
  }

  private get maxRows() {
    return this.rows.length;
  }

  private get maxCols() {
    return this.rows[0].cols.length;
  }

  isTree(row: number, col: number) {
    return this.rows[row].cols[col % this.maxCols] === "#"
  }

  isEmpty(row: number, col: number) {
    return this.rows[row].cols[col] === "."
  }

  isInsideForest(row: number) {
    return row < this.maxRows;
  }
}