function expandAroundCenter(
  string: string,
  left: number,
  right: number
): string {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  return string.substring(left + 1, right);
}

function longestPalindrome(s: string): string {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // Check for odd length palindrome
    const oddPalindrome = expandAroundCenter(s, i, i);
    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    // Check for even length palindrome
    const evenPalindrome = expandAroundCenter(s, i, i + 1);
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}
