const app = new Vue({
    el: "#app",
    data: {
        DATA: []
    },

    created() {
        axios.get('http://localhost/php-ajax-dischi/backend.php')
        .then((response) => {
            this.DATA = response.data;
        })
    },

    // methods: {
    //     metodoRicerca(research) {
    //         this.albumsFiltered = this.albums.filter((elem) => {
    //             return elem.title.toLowerCase().includes(research.toLowerCase());
    //         });
    //     }
    // }
})