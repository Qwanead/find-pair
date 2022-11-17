import getRandomInt from '@/utils/getRandomInt';

const shuffleArr = <T>(_array: T[]) => {
  const array = [..._array];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = getRandomInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export default shuffleArr;
