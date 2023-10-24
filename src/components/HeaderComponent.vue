<template>
    <div id="header">
         <div class="headerContent">
            <h1 v-headerStyle>
                Local Pharmacy
            </h1>
            <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/cart">Cart</router-link></li>
            </ul>
         </div>
    </div>
</template>
<script>
import './HeaderComponent.css'
export default {
    name: 'HeaderComp',
    props:{}
}
</script>