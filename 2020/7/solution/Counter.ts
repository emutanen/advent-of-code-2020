import { HaversackRule } from './HaversackRule';

export class Counter {
  constructor(public rules: HaversackRule[], public targetColor: string){}

  findHaversackRule = (targetColor: string): HaversackRule => {
    return this.rules.find(rule => rule.color === targetColor);
  }

  childSlotIsCapable = (rule: HaversackRule): boolean => {
    if(rule.containsNoOtherBags) { // only possible case when childSlotIsCapable returns false
      return false;
    };
    if(rule.color === this.targetColor) { // Does not match criterion of carrying target color inside at least one other color bag
      return false;
    }
    if(rule.directlyContains(this.targetColor)) {
      return true;
    }

    let ans = false;
    rule.slots.forEach((value, key, slot) => {
      const childRule = this.findHaversackRule(key);
      const childSolution = this.childSlotIsCapable(childRule);
      if(childSolution) ans = true;
    });
    return ans;
  }

  childBagsCount = (rule: HaversackRule): number => {
    if(rule.containsNoOtherBags) {
      return 1;
    } else {
      let childCount = 0;
      rule.slots.forEach((value, key) => {
        const childRule = this.findHaversackRule(key);
        childCount += (value * (this.childBagsCount(childRule)));
      });
      return childCount + 1; // bag adds finally itself to the child count
    }
  }

  count = () => {
    let totalCount = 0;
  
      for(let rule of this.rules) {
        if(this.childSlotIsCapable(rule)) {
          totalCount++;
        }
      }
      return totalCount;
  }

  countContainingBags = () => {
    const targetBagRule = this.findHaversackRule(this.targetColor);
    return this.childBagsCount(targetBagRule) - 1; // due to recursive nature of childBagsCount the outermost bag counts itself as a child, so removing it from count
  }

}
