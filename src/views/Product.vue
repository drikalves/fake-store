<template>
  <section>
    <div v-if="product" class="product">
      <img v-if="product.image" :src="product.image" :alt="`${product.id}-image`">
      <div class="info">
        <h1 class="title">{{ product.title }}</h1>
        <p class="price">{{ product.price | numberPrice }}</p>
        <p class="description">{{ product.description }}</p>
        <button class="btn">Buy</button>
      </div>
    </div>
    <PageLoading v-else/>
  </section>
</template>

<script>
import api from '@/services';

export default {
  name: 'Products',
  props: ['id'],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getProduct() {
      api.get(`/products/${this.id}`).then((res) => {
        this.product = res.data;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 900px;
  padding: 60px 20px;
}

.price {
  color: #00c2cb;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
