<template>
  <section class="products-container">
    <transition mode="out-in">
      <div class="products" v-if="products && products.length" key="products">
        <div class="product" v-for="product in products" :key="product.id">
          <router-link :to="{name: 'Product', params: {id: product.id}}">
            <img v-if="product.image" :src="product.image" :alt="`${product.id}-image`">
            <p class="price">{{product.price}}</p>
            <h2 class="title">{{product.title}}</h2>
          </router-link>
        </div>
        <ProductsPage :productsPerPage="productsPerPage"/>
      </div>
      <div class="no-results" v-else-if="products && products.length === 0" key="no-results">
        <p>Busca sem resultados.</p>
      </div>
      <PageLoading key="loading" v-else/>
    </transition>
  </section>
</template>

<script>
import ProductsPage from '@/components/ProductsPage.vue';
import api from '@/services';
import PageLoading from './PageLoading.vue';

export default {
  name: 'ProductsList',
  components: {
    ProductsPage,
    PageLoading,
  },
  data() {
    return {
      products: null,
      productsPerPage: 5,
    };
  },
  computed: {
    url() {
      return `/products?limit=${this.productsPerPage}`;
    },
  },
  methods: {
    getProducts() {
      this.products = null;
      api.get(this.url).then((res) => {
        this.products = res.data;
      });
    },
  },
  watch: {
    url() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.product-container {
  margin: 0 auto;
  max-width: 1000px;
}

.products {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  margin: 30px;
}

.product {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  position: relative;
  transform: scale(1.1);
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: #ff64c6;
  font-weight: bold;
}

.no-result {
  text-align: center;
}
</style>
