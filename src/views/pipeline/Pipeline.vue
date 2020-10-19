<template>
  <div class="page-pipeline">
    <v-container>
      <list />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Pipeline',
  components: {
    List: () => import('./List')
  }
}
</script>
