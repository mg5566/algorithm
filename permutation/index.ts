function backtrack(
  nums: number[],
  currentPermutation: number[],
  usedArr: boolean[],
  result: number[][]
) {
  /*
	if 종료 조건을 만족하면
		결과 저장
		return
		
	for 가능한 선택 in 후보군
		if 선택이 유효하다면  // 가지치기 pruning
			선택 수행
			backtracking(다음 상태)  // 재귀 호출
			선택 취소 (백트래킹)
  */

  /**
   * 종료 조건
   *
   * 순열이 nums 의 길이와 같은 경우, 결과에 추가하고 종료한다.
   */
  if (currentPermutation.length === nums.length) {
    result.push([...currentPermutation]);
    return;
  }

  /**
   * 가지치기 조건
   *
   * 이전에 사용한 숫자가 사용된 경우, 선택하지 않고 넘어간다.
   *
   * used 배열을 사용하여 이전에 사용한 숫자를 체크한다.
   */
  for (let i = 0; i < nums.length; i++) {
    if (!usedArr[i]) {
      usedArr[i] = true;
      currentPermutation.push(nums[i]);
      backtrack(nums, currentPermutation, usedArr, result);
      currentPermutation.pop();
      usedArr[i] = false;
    }
  }
}

export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);
  const current: number[] = [];

  backtrack(nums, current, used, result);

  // 마지막 결과 반환
  return result;
}
