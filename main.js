const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand:'SE 331',
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50 ,onSale:true},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0 ,onSale:false}
            ],
            selectedVariant:0,
            cart: 0

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed : {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onSale(){
            return this.variants[this.selectedVariant].onSale ? this.brand + ' ' + this.product + ' is on sale' : '' ;
        }
    }
})