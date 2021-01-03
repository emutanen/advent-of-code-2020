import { CustomsFormData } from './CustomsFormMapping';

export const countGroupAnswers = (groupsData: CustomsFormData[]): number => {
  let sumOfAllAnswers = 0;
for(let groupData of groupsData) { // loop through all groups data
  let usedAnswers: string = '';
  const uniqueAnswers = groupData.entries.reduce((ans, personYesAnsws) => { // loop through group data
    for(let personYesAns of personYesAnsws) { // loop through all persons answers
        for(let answer of personYesAns) { // loop through single answers of single person
          if(!usedAnswers.includes(answer)) {
            usedAnswers += answer;
          }    
        }
    }
    return usedAnswers.length;
  }, 0);
  // console.log(`Group has ${uniqueAnswers} unique answers.`);
  sumOfAllAnswers+= uniqueAnswers;
}

return sumOfAllAnswers;
}

export const countGroupCommonAnswers = (groupsData: CustomsFormData[]): number => {
  let sumOfAllCommonAnswers = 0;

  for(let groupData of groupsData) {
    const commonAnswers = groupData.entries.reduce((remaining, personYesAnsws, i) => {
      if(remaining === []) return;

      let reducedRemainingBefore: string[] = remaining; // initial state
      let reducedRemainingAfter: string[] = []; // final state after filtering

      for(let personYesAns of personYesAnsws) { // loop through all persons answers
        if(reducedRemainingBefore.length === 0) break;

          for(let answer of personYesAns) { // loop through single answers of single person
            if(reducedRemainingBefore.includes(answer)) {
              reducedRemainingAfter.push(answer);
            }
          }
      }
      return reducedRemainingAfter;
    }, ['a', 'b', 'c', 'd', 'e',  // initial remaining common answers
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z']);

  // console.log(`Group has ${commonAnswers.length} common answers.`);
  sumOfAllCommonAnswers+= commonAnswers.length;
}

return sumOfAllCommonAnswers;
}