const template = document.createElement('template');
template.innerHTML = `
  <style>
    @keyframes roll {
        to {
          transform: rotate(360deg);
        }
    }
    
    div {
      width: 50px;
      height: 50px;
      margin: 50px;
      background-color: #ff93f0;
      animation: roll 3s linear infinite;
    }
  </style>
  
  <div></div>
`;

class RollingCube extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content);
  }

  attributeChangedCallback() {
    console.log('attribute changed');
  }
}

customElements.define('rolling-cube', RollingCube);
