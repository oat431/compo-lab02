app.component('review-form', {
    template:
        `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name" />
            <label for="name">Review:</label>
            <textarea id="review" v-model="review"></textarea>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <label for="name">Say yes if you wanna recommand this product</label>
            <input id="name" v-model="recommend" />
            <input type="submit" class="button" value="Submit" />
        </form>
    `,

    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: ''
        }
    },

    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === '' || this.recommend === '') {
                alert('missing fields')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }

            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = ''
        }
    },
})