Vue.component('greeting',{
    template: '<p> Hi {{name}}. <button v-on:click="change">Change name</button></p>',
    data:function(){
       return{ name: 'Alex'}
    },
    methods:{
        change:function(){
            this.name ='Nayana'
        }
    }

    
})

var one = new Vue({
    el: '#vue-app-one',
    data: {
     

    },
    methods: {
    
     
    },
    computed: {
     
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
    },
    methods: {
    
    },
    computed: {
    
      
    }
});