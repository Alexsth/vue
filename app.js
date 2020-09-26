var one = new Vue({
    el: '#vue-app-one',
    data: {
      title:"First instance"

    },
    methods: {
    
     
    },
    computed: {
      greet:function(){
          return 'Hello from first instance'
      }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
      title:'Second instance'
    },
    methods: {
        change:function(){
            one.title = 'Changed'
        }
    },
    computed: {
        greet:function(){
            return 'Hello from second instance'
        }
      
    }
});