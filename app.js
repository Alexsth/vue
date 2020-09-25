new Vue({
    el: '#vue-app',
    data: {
        age: 25 ,
        x : 0,
        y:0

    },
    methods: {
        add: function(x){
           this.age+= x;
        },
        subtract:function(y){
            this.age-=y;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})