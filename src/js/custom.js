import globals from "./globals.js"
import countries from "./countries.js"
import country from "./country.js"

document.addEventListener('alpine:init', () => {
    Alpine.store('Globals',  globals);

    Alpine.data('Countries', countries);

    Alpine.data('Country', country);
})