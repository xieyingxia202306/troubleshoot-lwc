import { LightningElement, api } from 'lwc';

export default class Controls extends LightningElement {
  @api operand = 1;
  factors = [0,2,3,4,5,6];

  handleAdd() {
    this.dispatchEvent(new CustomEvent('add', {
      detail: this.operand
    }));
  }
  
  handleSubtract() {
    this.dispatchEvent(new CustomEvent('subtract', {
      detail: this.operand
    }));
  }

  handleMultiply(event) {
    const factor = event.target.dataset.factor;
    this.dispatchEvent(new CustomEvent('multiply', {
      detail: factor
    }));
  }
}