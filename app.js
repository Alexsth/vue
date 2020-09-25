new Vue({
    el: '#vue-app',
    data: {
        name: 'Alex',
        job: 'Developer',
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.google.com"> Link </a>'

    },
    methods: {
        greet: function(time){
            return 'Good ' + time + this.name;
        }
    }
})