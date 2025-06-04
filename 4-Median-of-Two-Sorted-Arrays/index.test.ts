import { describe, it, expect } from 'vitest';
import { findMedianSortedArrays } from './index';

describe('findMedianSortedArrays', () => {
  it('두 배열의 중간값을 구해야 한다', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2);
  });

  it('짝수 길이일 때도 올바르게 계산해야 한다', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5);
  });
});
