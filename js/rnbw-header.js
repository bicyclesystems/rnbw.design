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
            <div class="row gap-xs">
                <svg-icon src="https://rnbw.design/images/logo.svg" class="default-icon"></svg-icon>
                <svg-icon src="https://rnbw.design/images/logo-hover.svg" class="hover-icon hidden"></svg-icon>
            </div>
            rnbw 0.1
        </a>
        <a href="https://renecss.org" id="nav-item" class="align-center column text-m gap-xs">
            <div class="row gap-xs">
                <svg-icon src="https://rnbw.design/images/rene.svg" class="default-icon"></svg-icon>
                <svg-icon src="https://rnbw.design/images/rene-hover.svg" class="hover-icon hidden"></svg-icon>
            </div>
            rene.css
        </a>
    </div>
</nav>
`;

class RnbwHeader extends HTMLElement {
  constructor() {
    super();
    const style = document.createElement('style');
    style.textContent = `
            #nav-item:hover .default-icon {
                display: none;
            }
            #nav-item:hover .hover-icon {
                display: block;
            }
        `;
    this.appendChild(style);
    this.innerHTML += headerTemplate;
  }

  connectedCallback() {
    this.highlightActiveLink();
  }

  highlightActiveLink() {
    const currentUrl = window.location.href;
    this.querySelectorAll("#nav-item").forEach((navItem) => {
      if (navItem.href === currentUrl) {
        const defaultIcon = navItem.querySelector(".default-icon");
        if (defaultIcon) {
          defaultIcon.classList.add("foreground-secondary");
        }
      }
    });
  }
}

customElements.define("rnbw-header", RnbwHeader);