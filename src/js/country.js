export default function () {
    return {
        country: [],
        selectedCountry: window.location.search.substring(1).split('=')[1],
        lastNativeCommonValue: '',
        currentBorderCountries: [],

        getCountry() {
            Alpine.store('Globals').isLoading = true;
            console.log(this.selectedCountry);

            fetch(`https://restcountries.com/v3.1/alpha/${this.selectedCountry}`)
                .then(response => response.json())
                .then(data => {
                    this.country = data;
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
                });
        },

        getBorderCountryNames() {
            const allCountries = this.$store.Globals.countries;

            console.log(allCountries);

            const matchingCountries= allCountries.filter(obj => {
                return this.currentBorderCountries.includes(obj.fifa);
            }).map(obj => obj.name.common);

            console.log(matchingCountries);

            return matchingCountries;
        }
    }
}