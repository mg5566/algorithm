import { describe, it, expect } from 'vitest';
import { solve, checkCards } from './index';

describe('checkCards', () => {
  it('샘플 케이스를 통과해야 한다', () => {
    const cards = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3];
    const queries = [10, 9, -5, 2, 3, 4, 5, -10];
    const result = checkCards(cards, queries);
    expect(result).toEqual([1, 0, 0, 1, 1, 0, 0, 1]);
  });

  it('중복된 카드와 음수가 섞여 있어도 동작해야 한다', () => {
    const cards = [1, 1, -1];
    const queries = [-1, 1, 2];
    expect(checkCards(cards, queries)).toEqual([1, 1, 0]);
  });

  it('빈 배열일 때 모두 0을 반환해야 한다', () => {
    const cards: number[] = [];
    const queries = [1, 2, 3];
    expect(checkCards(cards, queries)).toEqual([0, 0, 0]);
  });

  it('큰 입력에서도 올바르게 동작해야 한다', () => {
    const cards = Array.from({ length: 10000 }, (_, i) => i);
    const queries = [0, 9999, 10000];
    expect(checkCards(cards, queries)).toEqual([1, 1, 0]);
  });
});

describe('solve', () => {
  it('문자열 입력을 받아 정답을 출력해야 한다', () => {
    const input = `10\n6 3 2 10 10 10 -10 -10 7 3\n8\n10 9 -5 2 3 4 5 -10`;
    const output = solve(input);
    expect(output.trim()).toBe('1 0 0 1 1 0 0 1');
  });
});
