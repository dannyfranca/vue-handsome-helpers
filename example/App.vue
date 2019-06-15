<template lang="html">
  <div id="app">
    Open console and see the logs
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$helpers)
  }
}
</script>

<style>

</style>
