const shuffle = (array: number[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const inOrder = (numbers: number[]): boolean => {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) return false;
  }
  return true;
};

export const bogoSort = (numbers: number[]): number[] => {
  while (!inOrder(numbers)) shuffle(numbers);
  return numbers;
};
