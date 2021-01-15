import { expect, test } from '@jest/globals';
import { dataMapMethod } from '../solution/HaversackDataMapping';
import { Counter } from '../solution/Counter';
import { sampleInput } from './handyHaversacksRules.Part1.test';

const sampleInputPt2 = ['shiny gold bags contain 2 dark red bags.',
                    'dark red bags contain 2 dark orange bags.',
                    'dark orange bags contain 2 dark yellow bags.',
                    'dark yellow bags contain 2 dark green bags.',
                    'dark green bags contain 2 dark blue bags.',
                    'dark blue bags contain 2 dark violet bags.',
                    'dark violet bags contain no other bags.'];

test('count for sample input 1', () => {
  const rules = sampleInput.map(dataMapMethod);
  const counter = new Counter(rules, 'shiny gold');
  expect(counter.countContainingBags()).toBe(32);
});

test('count for sample input 2', () => {
  const rules2 = sampleInputPt2.map(dataMapMethod);
  const counter2 = new Counter(rules2, 'shiny gold');
  expect(counter2.countContainingBags()).toBe(126);
});