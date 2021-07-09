app.component('product-details',{
    props :{
        details:{
            type:String,
            required:true
        }
    },
    template :
    `
        <div className="product-detail">
            <h3>Detail:</h3>
            <p class="product-detail">
                {{details}}
            </p>
        </div>
    `
    ,
    data(){}
})