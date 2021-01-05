<template>
<div>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader  v-if="loading"/>

    <p
        class="center"
        v-else-if="!records.length"
    >
      Записей пока нет.
      <router-link to="/record">Добавьте первую запись</router-link>
    </p>

    <section v-else>
      <history-table :records="records" />
    </section>
  </div>
</div>
</template>

<script>
import HistoryTable from "../components/HistoryTable";

export default {
  name: "History",
  data: () => ({
    loading: true,
    records: [],
    categories: []
  }),
  async mounted() {
    // this.records = await this.$store.dispatch('FETCH_RECORDS')
    const records = await this.$store.dispatch('FETCH_RECORDS')
    this.categories = await this.$store.dispatch('FETCH_CATEGORIES')
    this.records = records.map(record => {
      return {
        ...record,
        categoryName: this.categories.find(c => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText: record.type === 'income' ? 'Доход' : 'Расход'
      }
    })

    this.loading = false
  },
  components: {
    HistoryTable
  }
}
</script>

<style scoped>

</style>