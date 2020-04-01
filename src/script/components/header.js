let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      background: var(--app-color-primary);
      color: white;
      height: 4em;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 24px;
      font-weight: normal;
    }
  </style>

  <header>
    <h1>PWA Starter</h1>
  </header>
`;

customElements.define('app-header', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
});