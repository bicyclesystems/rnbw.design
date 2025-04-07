const headerTemplate = `
<nav class="box-l padding-l gap-l justify-stretch" id="rnbw-logo">
    <div class="gap-l box">
        <a href="https://rnbw.design/" class="rnbw-logo">
        <svg-icon src="https://rnbw.design/images/rnbw.svg"></svg-icon>
        </a>
        <div class="text-s">high-quality,</br> design and</br>development tools</div>
    </div>
    <div class="gap-m justify-end box">
        <a href="https://rnbw.dev" id="nav-item" class="align-center column text-m gap-xs">
        <svg-icon src="https://rnbw.design/images/logo.svg" id="header-item"></svg-icon>
            rnbw 0.1
        </a>
        <a href="https://renecss.org" id="nav-item" class="align-center column text-m gap-xs">
        <svg-icon src="https://rnbw.design/images/rene.svg" id="header-item"></svg-icon>
        rene.css
        </a>
    </div>
</nav>
`;

class RnbwHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = headerTemplate;
  }

  connectedCallback() {
    this.setupNavItemHovers();
    this.highlightActiveLink();
  }

  setupNavItemHovers() {
    const navItems = this.querySelectorAll("#nav-item");

    navItems.forEach((navItem) => {
      const headerItem = navItem.querySelector("#header-item");
      if (!headerItem) return;
      
      const originalSrc = headerItem.getAttribute('src');
      const hoverSrc = originalSrc.replace('.svg', '-hover.svg');

      navItem.addEventListener("mouseover", () => {
        headerItem.setAttribute('src', hoverSrc);
      });

      navItem.addEventListener("mouseout", () => {
        headerItem.setAttribute('src', originalSrc);
      });
    });
  }

  highlightActiveLink() {
    const currentUrl = window.location.href;
    
    this.querySelectorAll("#nav-item").forEach((navItem) => {
      if (navItem.href === currentUrl) {
        navItem.querySelector("#header-item").classList.add("foreground-secondary");
      }
    });
  }
}

customElements.define("rnbw-header", RnbwHeader);