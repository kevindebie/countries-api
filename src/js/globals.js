export default {
    countries: [],
    regions: [],
    isLoading: false,

    init() {
        this.isLoading = true;

        fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,continents,flags,fifa,cca3")
            .then(response => response.json())
            .then(data => {
                this.countries = data;
                this.isLoading = false;

                const continents = this.countries.map(country => country.continents[0]);
                this.regions = [...new Set(continents.map(continent => continent))];

                console.log(this.countries);
            })
    }
}