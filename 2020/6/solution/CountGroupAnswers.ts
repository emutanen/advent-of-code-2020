import { CustomsFormData } from './CustomsFormMapping';

export const countGroupAnswers = (groupsData: CustomsFormData[]): number => {
  let sumOfAllAnswers = 0;
for(let groupData of groupsData) { // loop through all groups data
  let usedAnswers: string = '';
  const uniqueAnswers = groupData.entries.reduce((ans, personYesAnsws) => { // loop through group data
    for(let personYesAns of personYesAnsws) { // loop through single persons all answers
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