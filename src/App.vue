<template>
  <div id="app">
    <div>
      <HeaderComponent />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import './App.css';
import HeaderComponent from '././components/HeaderComponent.vue';
import ProductSection from '././components/ProductSection.vue';
// import { productlist}  from './components/Constants';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
}
</script>
