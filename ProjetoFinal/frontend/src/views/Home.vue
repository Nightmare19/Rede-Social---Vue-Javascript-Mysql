<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      Articles: () => import('@/components/home/Articles')
    }
  }
</script>
