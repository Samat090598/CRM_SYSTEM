<template>
  <div>
    <div>
      <div class="page-title">
        <h3>Счет</h3>

        <button
            class="btn waves-effect waves-light btn-small"
            @click="refresh"
        >
          <i class="material-icons">refresh</i>
        </button>
      </div>

      <Loader v-if="loading" />

      <div v-else class="row">

        <home-bill
         :rates="currency.rates"
        />

        <home-currency
            :rates="currency.rates"
            :date="currency.date"
        />

      </div>
    </div>

  </div>
</template>

<script>
import HomeBill from "../components/HomeBill";
import HomeCurrency from "../components/HomeCurrency";

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('FETCH_CURRENCY')
    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true
      this.currency = await this.$store.dispatch('FETCH_CURRENCY')
      this.loading = false
    }
  },
  components: {
    HomeBill, HomeCurrency
  }
}
</script>
