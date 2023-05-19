export default function () {
    return {
        country: [],
        selectedCountry: window.location.search.substring(1).split('=')[1],
        lastNativeCommonValue: '',
        currentBorderCountries: [],
        rootPath: window.location.pathname.substring(1).split('/')[0],

        async getCountry() {
            Alpine.store('Globals').isLoading = true;

            if(this.selectedCountry) {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${this.selectedCountry}`);
                this.country = await response.json();

                console.log(this.country);

                /* Disable loading spinner */
                Alpine.store('Globals').isLoading = false;

                /* Change document title to country name */
                document.title = `${this.country[0].name.common} - Countries API`;

                /* Get border countries */
                if (this.country[0].hasOwnProperty('borders')) {
                    this.currentBorderCountries = Object.values(this.country[0].borders);
                }

                /* Get common value from last item in nativeName object */
                if (this.country[0].name.nativeName) {
                    const keys = Object.keys(this.country[0].name.nativeName);
                    const lastKey = keys[keys.length - 1];
                    const lastItem = this.country[0].name.nativeName[lastKey];
                    this.lastNativeCommonValue = lastItem.common;
                }
            }
        },

        getBorderCountries() {
            const allCountries = this.$store.Globals.countries;
            return allCountries.filter(obj => {
                return this.currentBorderCountries.includes(obj.cca3);
            });
        },

        goBackButton() {
            if (this.selectedCountry) {
                history.back()
            } else {
                window.location.pathname = `${this.rootPath}/index.html`;
            }
        }
    }
}