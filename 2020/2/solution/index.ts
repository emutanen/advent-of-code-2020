import { PasswordPolicyFileReader } from './PasswordPolicyFileReader';
import { Validator } from './Validator';
import { PasswordPolicy } from './PasswordPolicy';
import { validatePasswordPolicy } from './validatePasswordPolicy';

const passwordPolicyFileReader = new PasswordPolicyFileReader('../input/input.txt');
passwordPolicyFileReader.read();

const passwordValidator = new Validator<PasswordPolicy>(passwordPolicyFileReader.data, validatePasswordPolicy);
passwordValidator.validate();
console.log(`Final result: Password validator found ${passwordValidator.validItemsAmount} valid passwords.`);
