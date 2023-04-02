export const _03_JumpSearch = () => {
  let lst = [1, 5, 9, 10, 15, 23, 46, 78, 90, 99];
  let searchElement = 100;
  console.log(searchFn(lst, searchElement));
};

const searchFn = (lst, searchElement) => {
  let n = lst.length;
  const initBlockSize = parseInt(Math.sqrt(n));
  let currentIndex = initBlockSize;
  let startIndex = 0;

  while (currentIndex < n) {
    if (lst[currentIndex] <= searchElement) {
      startIndex = currentIndex;
      currentIndex += initBlockSize;
    } else {
      break;
    }
  }

  let limit = startIndex + initBlockSize;

  while (startIndex < n && startIndex < limit) {
    if (lst[startIndex] == searchElement) {
      return `Element Found at index : ${startIndex}`;
    }
    startIndex++;
  }

  return "Element Not Found";
};
