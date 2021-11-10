<template>
<div class="w-full h-full">
  <div class="flex flex-col h-full">
    <Comp text="Hello World!"></Comp>
  </div>
</div>
</template>

<script>
import Comp from '../../components/Comp/Comp.vue'
export default {
  name: 'MainPage',
  components: {
    Comp
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
