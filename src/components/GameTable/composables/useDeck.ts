import { reactive } from 'vue';
import shuffleArr from '@/utils/shuffleArr';
import fruitIconSet from '@/components/icons/Fruits/fruitIconSet';
import Card from '@/components/GameCard/GameCard';
import { UNIQUE_CARDS } from '@/settings';

const useDeck = () => {
  const generateIconSet = <T>(iconSet: T[], length: number) => shuffleArr(iconSet)
    .slice(0, length);

  const generateDeck = (length: number) => shuffleArr(new Array(length)
    .fill(null)
    .map((_, i) => reactive(new Card(i, i < length ? i : i - length))));

  const iconSet = generateIconSet(fruitIconSet, UNIQUE_CARDS);
  const deck = generateDeck(UNIQUE_CARDS * 2);

  return { iconSet, deck };
};

export default useDeck;
