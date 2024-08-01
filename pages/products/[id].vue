<template>
  <div>
    product number {{ route.params.id }}
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  definePageMeta(
    {
      layout: 'products'
    }
  )
</script>

<style scoped>

</style>