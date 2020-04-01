import '../components/header.js';

let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>
    #welcomeBlock {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    #welcomeBlock h2 {
      margin-bottom: 0;
    }

    #welcomeBlock p {
      max-width: 22em;
    }

    #welcomeBlock img {
      width: 6em;
    }

    pwa-install {
      position: absolute;
      bottom: 16px;
      right: 16px;
    }
    
    @media(spanning: single-fold-vertical) {
      #welcomeBlock {
        width: 50%;
      }
    }
  </style>

  <app-header></app-header>
  
  <main>
    <div id="welcomeBlock">
      <img src="assets/icons/icon_512.png" alt="app icon">
      <h2>Welcome!</h2>

      <p>
        Welcome to the vanilla edition of the <a href="https://pwabuilder.com">PWABuilder</a> pwa-starter!
      </p>
    </div>

    <pwa-install>Install PWA Starter</pwa-install>
  </main>
  
`;

customElements.define('app-index', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
});