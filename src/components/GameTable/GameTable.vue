<template>
  <section class="table">
    <div
      v-if="!isEndGame"
      class="table__game-zone"
    >
      <GameCard
        v-for="(card) in deck"
        :key="card.id"
        :flip="card.isFlip"
        :hide="card.isHide"
        @click="onCardClick(card)"
      >
        <component :is="iconSet[card.value]" />
      </GameCard>
    </div>

    <p v-else>
      Вы выиграли
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import GameCard from '@/components/GameCard/GameCard.vue';
import useDeck from '@/components/GameTable/composables/useDeck';
import { FLIP_ANIMATION_TIME } from '@/settings';
import type Card from '@/components/GameCard/GameCard';
import type { Ref } from 'vue';

const { iconSet, deck } = useDeck();

const openCards: Ref<Card[]> = ref([]);

const isEndGame = computed(() => deck.every((card) => card.isHide));

const flipCards = (cards: Card[]) => cards.forEach((card) => {
  card.flip();
});

const hideCards = (cards: Card[]) => cards.forEach((card) => {
  card.hide();
});

const onCardClick = (card: Card) => {
  if (!card.isFlip && !card.isHide) {
    card.flip();
    openCards.value.push(card);

    if (openCards.value.length === 2) {
      const cards = [...openCards.value];
      const [cardA, cardB] = cards;
      if (cardA.value === cardB.value) {
        setTimeout(() => hideCards(cards), FLIP_ANIMATION_TIME * 1000);
      } else {
        setTimeout(() => flipCards(cards), FLIP_ANIMATION_TIME * 1000);
      }
      openCards.value = [];
    }
  }
};
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  height: 100%;
}

.table__game-zone {
  display: grid;
  grid: auto-flow 150px / repeat(6, 100px);
  gap: 15px;
}
</style>
