new Vue({
    el: '#vue-app',
    data: {
        age:20,
        a:0,
        b:0
    },
    methods: {
     
    },
    computed:{
        addtoA: function(){
            return this.age + this.a;
        },
        addtoB: function(){
            return this.age + this.b;
        }
    }
})