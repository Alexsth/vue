new Vue({
    el: '#vue-app',
    data: {
     output:'Select'

    },
    methods: {
        show:function(){
            this.output = this.$refs.input.value;
        }
     
    },
    computed: {
     
    }
});
