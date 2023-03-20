export const _02_BinarySearch = () => {
  let lst = [1, 5, 9, 10, 15, 23, 46, 78, 90, 99];
  let searchElement = 78;
  console.log(searchFn(lst, searchElement));
};

const searchFn = (lst, searchElement) => {
  const n = lst.length;

  let leftIndex = 0;
  let rightIndex = n - 1;

  while (leftIndex <= rightIndex) {
    //const mid = parseInt((leftIndex + rightIndex) / 2);
    const mid = leftIndex + Math.floor((rightIndex - leftIndex) / 2); //THIS IS FOR  AVOID OVERFLOW

    const value = lst[mid];

    if (searchElement < value) {
      rightIndex = mid - 1;
    } else if (searchElement > value) {
      leftIndex = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
