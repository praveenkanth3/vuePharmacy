<template>
        <div class="productBody" id="homeSection">
            <div>
                <img :src="product.image" class="productImage" />
            </div>
            <div class="productDetailSection">
                <p>Name: <span>{{ product.name }}</span></p>
                <p>Price: <span>{{ product.price }}</span></p>
                <p>Desc: <span>{{ product.desc }}</span></p>
                <div class="countSection">
                    <button >+</button>
                    <input type='number' />
                    <button>-</button>
                </div>
                <div>
                    <button class="addToCartBtn" >Add to cart</button>
                </div>
            </div>
        </div>
</template>

<script>
/* eslint-disable */ 
import './ProductSection.css'
export default {
    name: 'ProductsSection',
    props:{
        product: Object,
    },
}

</script>

<!-- <div className="productBody" id="homeSection">
    {contextHolder}
    <div>
        <img src={itemDetail.image} className="productImage" />
    </div>
    <div className="productDetailSection">
        <p>Name: <span>{itemDetail.name}</span></p>
        <p>Price: <span>{itemDetail.price}</span></p>
        <p>Desc: <span>{itemDetail.desc}</span></p>
        <div className="countSection">
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <input type='number' value={count} disabled />
            <button onClick={() => onClickMinus()}>-</button>
        </div>
        <div>
            <button className="addToCartBtn" onClick={() => onClickAddToCart()}>Add to cart</button>
        </div>
    </div>
</div> -->