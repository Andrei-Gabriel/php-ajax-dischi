const app = new Vue({
    el: "#app",
    data: {
        testoRicerca: "",
        DATA: null,
        DATAfiltered: null,
    },

    created() {
        axios.get('http://localhost/php-ajax-dischi/backend.php')
        .then((response) => {
            this.DATA = response.data;
            this.DATAfiltered = response.data;
        })
    },

    methods: {
        metodoRicerca(research) {
            this.DATAfiltered = this.DATA.filter((elem) => {
                return elem.title.toLowerCase().includes(research.toLowerCase());
            });
        }
    }
})