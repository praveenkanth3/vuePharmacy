<template>
  <div id="app">
    <div>
      <HeaderComponent />
      <div class="productsSections">
        <ProductSection v-for="item in list" :key="item.id"  :product="item"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import './App.css';
import HeaderComponent from '././components/HeaderComponent.vue';
import ProductSection from '././components/ProductSection.vue';
import { productlist}  from './components/Constants';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ProductSection
  },
  computed: {
    list() {
      return productlist;
    }
  }
}
</script>
