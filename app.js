new Vue({
    el: '#vue-app',
    data: {
        name: 'Alex',
        job: 'Developer'

    },
    methods: {
        greet: function(time){
            return 'Good ' + time + this.name;
        }
    }
})