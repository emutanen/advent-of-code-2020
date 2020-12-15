import { PasswordPolicy } from "./PasswordPolicy";

export const validatePasswordPolicy = ({ policy, password }: PasswordPolicy): Boolean => {
  // business logic here
  const policyLength = policy.length;
  const targetChar = policy[policyLength - 1];
  const occurrenceCount = password.split(targetChar).length - 1; // fast count with split
  const minSplit = policy.split('-');
  const maxSplit = minSplit[1].split(' ');

  const minCount = parseInt(minSplit[0]);
  const maxCount = parseInt(maxSplit[0]);

  if(occurrenceCount >= minCount && occurrenceCount <= maxCount) {
    return true;
  } else {
    return false;
  }
}

export const validatePositionalPasswordPolicy = ({ policy, password }: PasswordPolicy): Boolean => {
  const policyLength = policy.length;
  const targetChar = policy[policyLength - 1];
  // const occurrenceCount = passwordPolicy.password.split(targetChar).length - 1;
  const occurrence1Split = policy.split('-');
  const occurrence2Split = occurrence1Split[1].split(' ');

  const occurrence_one = password[parseInt(occurrence1Split[0]) - 1] === targetChar; // 1-based indexing in passwords for position
  const occurrence_two = password[parseInt(occurrence2Split[0]) - 1] === targetChar;

  if(occurrence_one != occurrence_two) {
    return true;
  } else {
    return false;
  }
}