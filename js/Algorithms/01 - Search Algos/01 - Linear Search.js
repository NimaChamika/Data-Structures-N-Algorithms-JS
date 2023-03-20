export const LinearSearch = () => {
  let lst = [1, 5, 9, 10, 15, 23, 46, 78, 90];
  let searchElement = 78;

  let n = lst.length;

  for (let i = 0; i < n; i++) {
    if (lst[i] == searchElement) {
      console.log(`Element found at index: ${i}`);
      return;
    }
  }
  console.log(`Element not found`);
  return;
};
