import { describe, it, expect } from 'vitest';
import { longestPalindrome } from './index';

describe('longestPalindrome', () => {
  it('문자열의 가장 긴 회문을 찾아야 한다', () => {
    expect(longestPalindrome('babad')).toBe('bab');
  });

  it('길이가 짝수인 회문도 처리해야 한다', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });
});
