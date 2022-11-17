class Card {
  readonly id;
  readonly value;
  isHide = false;
  isFlip = false;

  constructor(id: number, value: number) {
    this.id = id;
    this.value = value;
  }

  flip() {
    this.isFlip = !this.isFlip;
  }

  hide() {
    this.isHide = true;
  }
}

export default Card;
