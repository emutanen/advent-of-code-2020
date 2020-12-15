import { PasswordPolicyFileReader } from './PasswordPolicyFileReader';
import { PasswordPolicy } from './PasswordPolicy';
import { Validator } from './Validator';
import { validatePasswordPolicy, validatePositionalPasswordPolicy } from './validatePasswordPolicy';

const passwordPolicyFileReader = new PasswordPolicyFileReader('../input/input.txt');
passwordPolicyFileReader.read();

const passwordValidator = new Validator<PasswordPolicy>(passwordPolicyFileReader.data, validatePositionalPasswordPolicy);
passwordValidator.validate();
console.log(`Final result: Password validator found ${passwordValidator.validItemsAmount} valid passwords.`);
