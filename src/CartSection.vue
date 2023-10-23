<template>
    <div>
        <table>
            <tr>
                    <th>No.</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
            </tr>
            <tr v-for="(item,index) in cartItems" :key="Math.floor(Math.random * 100) + item.val.name">
                <td>{{ index + 1 }}</td>
                <td>{{ item.val.name }}</td>
                <td>{{item.qty}}</td>
                <td>{{item.val.price * item.qty}}</td>
                <td><button @click="onclickDelete({index,item})">Delete</button></td>
            </tr>
        </table>
        <div>Total: {{ total }}</div>
    </div>

</template>
<script>
/* eslint-disable */
import { store } from './store';

export default{
    name: 'CartPage',
    data: function (){
        return {
            totalAmount:0
        }
    },
    computed:{
        cartItems(){
            return store.state.cartItem
        },
        total(){
            // this.cartItems.forEach(item => {
            //     this.totalAmount += item.val.price * item.qty;
            // })
            // return this.totalAmount;
            return store.state.total;
        }
    },
    methods:{
        onclickDelete(payload){
            this.$store.dispatch('deleteFromCart', payload)
        }
    }

}
</script>