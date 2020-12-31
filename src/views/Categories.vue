<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">

        <category-create @created="addNewCategory"/>

        <category-edit />

      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate'
import CategoryEdit from '@/components/CategoryEdit'

export default {
  name: "Categories",
  data: () => ({
    categories: []
  }),
  components: {
    CategoryCreate, CategoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category)
      console.log(this.categories)
    }
  }
}
</script>

<style scoped>

</style>