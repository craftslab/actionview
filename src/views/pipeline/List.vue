<template>
  <table-pipeline />
</template>

<script>
import TablePipeline from '@/components/table/TablePipeline'
export default {
  name: 'List',
  components: {
    TablePipeline
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return getPost()
    }
  },
  methods: {
    handleClick: (e) => {
      console.log(e)
    }
  }
}
</script>
