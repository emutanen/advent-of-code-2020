import { PasswordPolicy } from "./PasswordPolicy";

export const validatePasswordPolicy = (passwordPolicy: PasswordPolicy): Boolean => {
  // business logic here
  const policyLength = passwordPolicy.policy.length;
  const targetChar = passwordPolicy.policy[policyLength - 1];
  const occurrenceCount = passwordPolicy.password.split(targetChar).length - 1; // fast count with split
  const minSplit = passwordPolicy.policy.split('-');
  const maxSplit = minSplit[1].split(' ');

  const minCount = parseInt(minSplit[0]);
  const maxCount = parseInt(maxSplit[0]);

  if(occurrenceCount >= minCount && occurrenceCount <= maxCount) {
    return true;
  } else {
    return false;
  }
}