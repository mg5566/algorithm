function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Merge two arrays
  const nums = [...nums1, ...nums2];
  // Sort the merged array
  nums.sort((a, b) => a - b);

  // Find the median
  const median =
    nums.length % 2 === 0
      ? (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
      : nums[Math.floor(nums.length / 2)];

  return median;
}
