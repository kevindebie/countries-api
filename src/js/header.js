class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="bg-white py-8 shadow-md shadow-gray-100 dark:bg-dark-blue">
            <div class="max-w-none flex justify-between items-center px-4 md:px-8 lg:max-w-[1350px] lg:mx-auto">
                <span class="mb-0 text-xl md:text-2xl font-bold dark:text-white">
                    <a :href="window.location.href.includes('?country') ? '../index.html' : './index.html'">Where in the world?</a>
                </span>
                <button @click="$store.darkMode = ! $store.darkMode" 
                        class="text-black font-semibold text-lg inline-flex gap-3 items-center dark:text-white">
                    <i x-show="$store.darkMode === false || $store.darkMode === undefined" class="fa-regular fa-moon -rotate-[30deg]"></i> 
                    <i x-show="$store.darkMode === true" class="fa-solid fa-moon -rotate-[30deg]"></i> 
                    Dark Mode
                </button>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);