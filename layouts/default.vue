<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url(./../styles/index.scss);
</style>