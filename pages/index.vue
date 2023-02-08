<template>
  <div>
    <h1>Tailwind</h1>
  </div>
  <div>{{ data }}</div>
</template>

<script setup>
  const { data } = await useFetch('/api/bob')
</script>

<style scoped>

</style>