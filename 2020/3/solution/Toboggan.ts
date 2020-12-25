interface TobogganPosition {
  row: number;
  col: number;
}

export interface TobogganSpeedProfile {
  horizontalSpeed: number;
  verticalSpeed: number;
}

export class Toboggan {
  constructor(
    public speed: TobogganSpeedProfile,
    private position: TobogganPosition = { row: 0, col: 0 } // zero-indexed position
    ) {}

  getPosition(): TobogganPosition {
    return this.position;
  }

  private stepRowPos() {
    this.position.row+=this.speed.verticalSpeed;
  }

  private stepColPos() {
    this.position.col+=this.speed.horizontalSpeed;
  }

  move(): void {
    this.stepRowPos();
    this.stepColPos();
  }
}