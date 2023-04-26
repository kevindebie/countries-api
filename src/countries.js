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
            if (this.filteredRegion !== 'All') {
                const resultRegion = [];

                for (const region of results) {
                    let addProduct = false;
                    if (region.continents.includes(this.filteredRegion)) {
                        addProduct = true;
                    }
                    if (addProduct) {
                        resultRegion.push(region);
                    }
                }
                results = resultRegion;
            }
        }

        return results;
    }
})