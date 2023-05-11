class ListTemplate extends HTMLElement {
  items = 0;


  static get observedAttributes(){
    return ['items'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'items':
        this.items = newValue || this.items;
        break;
    }
  }


  connectedCallback() {
    this.innerHTML = `<ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
    <li>list item 4</li>
    <li>list item 5</li>
    <li>list item 6</li>
    <li>list item 7</li>
    <li>list item 8</li>
    <li>list item 9</li>
    <li>list item 10</li>
    <li>list item 11</li>
    <li>list item 12</li>
</ul>`;
  }
}

customElements.define("list-template", ListTemplate);
