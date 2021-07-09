const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium:true,
            details: 'You got something I need In this world full of people that want killing me'
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeCart(id){
            let index = this.cart.indexOf(id);
            if(index != 1){
                this.cart.splice(index,1)
            } 
        }
    },
    computed : {
        
    }
})