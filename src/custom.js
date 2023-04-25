import globals from "./globals.js"
import countries from "./countries.js"
document.addEventListener('alpine:init', () => {
    Alpine.store('Globals',  globals);

    Alpine.data('Countries', countries);

})