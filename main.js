const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium:true,
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