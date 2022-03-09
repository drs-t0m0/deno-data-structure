export const combSort = (numbers: number[]): number[] => {
  const length = numbers.length;
  let gap = length;
  let swapped = true;

  while (gap != 1 || swapped) {
    gap = Math.floor(gap / 1.3);
    if (gap < 1) {
      gap = 1;
    }

    swapped = false;

    for (let i = 0; i < length - gap; i++) {
      if (numbers[i] > numbers[i + gap]) {
        [numbers[i], numbers[i + gap]] = [numbers[i + gap], numbers[i]];
        swapped = true;
      }
    }
  }

  return numbers;
};
