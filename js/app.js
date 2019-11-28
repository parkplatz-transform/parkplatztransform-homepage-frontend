apiURL = "http://localhost:8888/vanessa/parkplatz_transform/park_trans_backend/web";


new Vue({
    el: '#app',

    data: {
      dates: '',

      images:'',
      // imagesUrl:''
      downloads:''
    },

    ready: function(){
        this.getImages();
        this.getDates();
        this.getFiles();

    },

    methods: {
        getDates: function(){
            // this.$set('date', '');
            this.$http.get(apiURL+ '/dates', function(dates){
                this.$set('dates', dates);
            });
        },

        getImages: function(){
            // this.$set('image', '');
            this.$http.get(apiURL+ '/images', function(images){
                this.$set('images', images);
                // this.$set('imagesUrl', images[0].field_images[0].url);

            });
        },
        getFiles: function(){
            // this.$set('image', '');
            this.$http.get(apiURL+ '/downloads', function(downloads){
                this.$set('downloads', downloads);
                // this.$set('imagesUrl', images[0].field_images[0].url);

            });
        }

    }
});
