export const cocktailSort = (numbers: number[]): number[] => {
  const length = numbers.length;
  let swapped = true;
  let start = 0;
  let end = length - 1;
  while (swapped) {
    swapped = false;

    for (let i = start; i < end; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    swapped = false;
    end -= 1;

    for (let i = end - 1; i > start - 1; i--) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }

    start += 1;
  }

  return numbers;
};
