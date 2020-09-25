export default class Block {
  constructor(label, size, cssClass) {
    this.label = label;
    this.size = size;
    this.cssClass = cssClass;
  }

  print() {
    console.log("printing..", this.label);
    console.log("printing..", this.size);
  }

  draw() {
    return `<div class="block ${this.cssClass}" style="height: ${this.size}px; width: ${this.size}px;">${this.label}</div>`;
  }
}
