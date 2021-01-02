import { countGroupAnswers } from '../solution/CountGroupAnswers';

const testGroupOne = { entries: [['a', 'b', 'c']]};
const testGroupTwo = { entries: [['a'], ['b'], ['c']]};
const testGroupThree = { entries: [['ab'], ['bc']]};
const testGroupFour = { entries: [['a'],['a'],['a'],['a']]};
const testGroupFive = { entries: [['b']]};

const groupsData = [testGroupOne, testGroupTwo, testGroupThree, testGroupFour, testGroupFive];

test('test single person\'s answer with 3 unique ans', () => {
  expect(countGroupAnswers([testGroupOne])).toBe(3);
});

test('test three person\'s answers with single unique ans each', () => {
  expect(countGroupAnswers([testGroupTwo])).toBe(3);
});

test('test two person\'s answers with 3 unique ans in total', () => {
  expect(countGroupAnswers([testGroupThree])).toBe(3);
});

test('test four person\'s answers with 1 unique ans in total', () => {
  expect(countGroupAnswers([testGroupFour])).toBe(1);
});

test('test single person\'s single unique ans', () => {
  expect(countGroupAnswers([testGroupFive])).toBe(1);
});

test('test all groups at once', () => {
  expect(countGroupAnswers(groupsData)).toBe(11)
});
