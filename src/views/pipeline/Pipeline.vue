<template>
  <div class="page-pipeline">
    <v-container>
      <list />
    </v-container>
  </div>
</template>

<script>
import List from '@/views/pipeline/List'
export default {
  name: 'Pipeline',
  components: {
    List
  }
}
</script>
