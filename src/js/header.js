class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="bg-white py-8 shadow-md shadow-gray-100">
            <div class="max-w-none flex justify-between items-center px-4 md:px-8 lg:max-w-[1350px] lg:mx-auto">
                <h1 class="mb-0 text-2xl font-bold">
                    <a href="../index.html">Where in the world?</a>
                </h1>
                <button class="text-black font-semibold text-lg inline-flex gap-3 items-center">
                    <i class="fa-regular fa-moon -rotate-[30deg]"></i> Dark Mode
                </button>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);