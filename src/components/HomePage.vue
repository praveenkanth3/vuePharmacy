<template>
    <div class="productsSections">
        <ProductSection v-for="item in list" :key="item.id"  :product="item"/>
      </div>
</template>
<script>
import './ProductSection.css';
import { productlist } from './Constants';
import ProductSection from './ProductSection.vue';
export default{
    name: 'HomePage',
    components: {
    ProductSection
  },
    computed: {
    list() {
      return productlist;
    }
  }
}
</script>