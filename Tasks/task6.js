export default function longestLogin(loginList) {
    return loginList.reduceRight((longest, currentWord) => {
      if (currentWord.length > longest.length) {
        return currentWord;
      } else {
        return longest;
      }
    }, '');
  }