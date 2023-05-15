export default {
    darkMode: false,
    countries: [],
    regions: [],
    isLoading: false,
    chevronDown: '/src/icons/chevron-down.svg#chevron-down',
    arrowLeft: '/src/icons/arrow-left.svg#arrow-left',
    notFound: 'Not found',

    init() {
        this.isLoading = true;

        fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,continents,flags,cca3")
            .then(response => response.json())
            .then(data => {
                this.countries = data;
                this.isLoading = false;

                const continents = this.countries.map(country => country.continents[0]);
                this.regions = [...new Set(continents.map(continent => continent))];

                console.log(this.countries);
            })
    },
}