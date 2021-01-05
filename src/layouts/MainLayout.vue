<template>
  <div>
    <Loader
        v-if="loading"
    />
    <div
        class="app-main-layout"
        v-else
    >
      <navbar @click="isOpen = !isOpen"/>
      <sidebar v-model="isOpen"/>

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'Создать новую запись'">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/app/Navbar";
import Sidebar from "../components/app/Sidebar";

export default {
name: "MainLayout",
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.INFO).length) {
      await this.$store.dispatch('FETCH_INFO')
    }

    this.loading = false
  },
  components: {
    Navbar, Sidebar
  }
}
</script>

<style scoped>

</style>