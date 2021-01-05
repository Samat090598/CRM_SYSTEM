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
      <history-table :records="items" />

      <Paginate
          v-model="page"
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :prev-text="'Назад'"
          :next-text="'Вперед'"
          :container-class="'pagination'"
          :page-class="'waves-effect'"
      />
    </section>
  </div>
</div>
</template>

<script>
import paginationMixin from '../mixins/pagination.mixin'
import HistoryTable from "../components/HistoryTable";

export default {
  name: "History",
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    this.records = await this.$store.dispatch('FETCH_RECORDS')
    const categories = await this.$store.dispatch('FETCH_CATEGORIES')

    this.setupPagination(this.records.map(record => {
      return {
        ...record,
        categoryName: categories.find(c => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText: record.type === 'income' ? 'Доход' : 'Расход'
      }
    }))

    this.loading = false
  },
  components: {
    HistoryTable
  }
}
</script>

<style scoped>

</style>