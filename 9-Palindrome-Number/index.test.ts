import { describe, it, expect } from 'vitest';
import { isPalindrome } from './index';

describe('isPalindrome', () => {
  it('회문인 숫자에 대해 true를 반환해야 한다', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it('회문이 아닌 숫자에 대해 false를 반환해야 한다', () => {
    expect(isPalindrome(-121)).toBe(false);
  });
});
