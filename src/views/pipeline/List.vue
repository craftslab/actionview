<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <plain-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PlainTable from '@/components/list/PlainTable'
export default {
  components: {
    PlainTable
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
