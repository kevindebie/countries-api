export default {
    countries: [],
    regions: [],

    init() {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,continents,flags")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.countries = data;

                const continents = this.countries.map(country => country.continents[0]);
                this.regions = [...new Set(continents.map(continent => continent))];

                console.log(this.regions);
                return this.regions;
            })
    }
}

