import { LightningElement, api } from "lwc";
import LightningAlert from "lightning/alert";
export default class Child extends LightningElement {
  handleAdd() {
    this.dispatchEvent(new CustomEvent('add'));
  }
  handleSubtract() {
    this.dispatchEvent(new CustomEvent('subtract'));
  }
}