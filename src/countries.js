export default () => ({
    search: '',
    filteredRegion: '',

    searchedCountries() {
        const search = this.search;
        let results = this.$store.Globals.countries;

        if (search) {
            results = results.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        if (this.filteredRegion) {
            const resultRegion = [];
            console.log(results);
            for (const region of results) {
                console.log(region);
                let addProduct = false;
                if (region.continents.includes(this.filteredRegion)) {
                    addProduct = true;
                }
                if (addProduct) {
                    resultRegion.push(region);
                }
                if (this.filteredRegion === 'All') {
                    results = this.$store.Globals.countries;
                }
            }
            results = resultRegion;
        }

        return results;
    }
})