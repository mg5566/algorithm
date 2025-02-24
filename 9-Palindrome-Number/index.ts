function isPalindrome(x: number): boolean {
  // 엣지 케이스 제거: 음수와 0이 아닌데 10으로 나누어 떨어지는 수는 회문이 아님
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;
  // 숫자의 후반부를 뒤집어서 전반부와 비교
  while (x > reversedHalf) {
    // x의 마지막 자릿수를 reversedHalf에 추가
    reversedHalf = reversedHalf * 10 + (x % 10);
    // x의 마지막 자릿수를 제거
    x = Math.floor(x / 10);
  }

  // 전반부와 후반부를 비교하거나, 숫자의 길이가 홀수일 경우 중간 자릿수를 제외하고 비교
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
