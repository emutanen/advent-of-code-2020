import { countGroupCommonAnswers } from '../solution/CountGroupAnswers';

const testGroupOne = { entries: [['a', 'b', 'c']]};
const testGroupTwo = { entries: [['a'], ['b'], ['c']]};
const testGroupThree = { entries: [['ab'], ['bc']]};
const testGroupFour = { entries: [['a'],['a'],['a'],['a']]};
const testGroupFive = { entries: [['b']]};

const groupsData = [testGroupOne, testGroupTwo, testGroupThree, testGroupFour, testGroupFive];

test('test single person\'s answer with 3 unique ans', () => {
  expect(countGroupCommonAnswers([testGroupOne])).toBe(3);
});

test('test three person\'s answers with single unique ans each', () => {
  expect(countGroupCommonAnswers([testGroupTwo])).toBe(0);
});

test('test two person\'s answers with 3 unique ans in total', () => {
  expect(countGroupCommonAnswers([testGroupThree])).toBe(1);
});

test('test four person\'s answers with 1 unique ans in total', () => {
  expect(countGroupCommonAnswers([testGroupFour])).toBe(1);
});

test('test single person\'s single unique ans', () => {
  expect(countGroupCommonAnswers([testGroupFive])).toBe(1);
});

test('test all groups at once', () => {
  expect(countGroupCommonAnswers(groupsData)).toBe(6)
});
