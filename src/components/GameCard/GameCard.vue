<script setup lang="ts">
const props = defineProps<{
  flip: boolean,
  hide: boolean,
}>();
</script>

<template>
  <div
    :class="[
      'card',
      {
        'card--flip': props.flip,
        'card--hide': props.hide,
      },
    ]"
  >
    <div class="card__content">
      <div class="card__front">
        <slot />
      </div>
      <div class="card__back" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100px;
  height: 150px;

  background-color: transparent;

  perspective: 1000px;
}

.card--flip {
  & .card__content {
    transform: rotateY(0);
  }
}

.card--hide {
  & .card__content {
    transform: rotateY(0) scale(0);
    opacity: 0;
  }
}

.card__content {
  position: relative;

  width: 100%;
  height: 100%;

  transition:
    transform 0.35s ease-out,
    opacity 0.35s ease-out;
  transform: rotateY(180deg) scale(1);

  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  transform-style: preserve-3d;
}

.card__front,
.card__back {
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: #f1f1f1;

  backface-visibility: hidden;
}

.card__front {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5%;
}

.card__back {
  transform: rotateY(180deg);

  background-image: url('@/assets/card-back.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
