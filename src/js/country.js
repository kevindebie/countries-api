export default function () {
    return {
        country: [],
        selectedCountry: window.location.search.substring(1).split('=')[1],
        lastCommonValue: '',

        getCountry() {
            Alpine.store('Globals').isLoading = true;

            fetch(`https://restcountries.com/v3.1/name/${this.selectedCountry}`)
                .then(response => response.json())
                .then(data => {
                    this.country = data;
                    Alpine.store('Globals').isLoading = false;

                    console.log(this.country);

                    /* Get common value from last item in nativeName object */
                    const keys = Object.keys(this.country[0].name.nativeName);
                    const lastKey = keys[keys.length - 1];
                    const lastItem = this.country[0].name.nativeName[lastKey];
                    this.lastCommonValue = lastItem.common;
                });
        },
    }
}