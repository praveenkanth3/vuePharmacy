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
                <button v-on:click="counter('inc')">+</button>
                <input type='number' v-model="qty" disabled/>
                <button v-on:click="counter('dec')">-</button>
            </div>
            <div>
                <button class="addToCartBtn" v-on:click="addToCartProduct(product)">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import './ProductSection.css';
export default {
    name: 'ProductsSection',
    data: function () {
        return {
            qty:1,
        }
    },
    props: {
        product: Object,
        cartProducts: Array,
    },
    methods: {
        counter(operation){
            if(operation === 'inc'){
                this.qty++;
            }
            else{
                if((this.qty-1) < 1 ){
                    this.qty =1
                }
                else{
                    this.qty--;
                }
            }
        },
        addToCartProduct(val) {
            this.$store.dispatch('addToCart', {val,qty:this.qty})
        }
    }
}

</script>