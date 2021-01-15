export interface HaversackRule {
  slots: Map<string,number>;
  color: string;
  noOtherBags: Boolean;
}

export class HaversackRule implements HaversackRule {
  constructor(public color: string, public slots: Map<string, number>, public noOtherBags: Boolean) {
    // console.dir(`Haversack has color ${color} and slots ${JSON.stringify(slots, null, 6)}`);
  }

  directlyContains(color: string): Boolean {
    return this.slots.has(color);
  }

  numberOfBags(color: string): number {
      return this.slots.get(color);
  }

  get containsNoOtherBags(): Boolean {
    return this.noOtherBags;
  }
}