class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-light-gray dark:bg-dark-bg dark:text-white/50">
            <p class="text-center text-xs py-2">Created by Kevin de Bie</p>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);


