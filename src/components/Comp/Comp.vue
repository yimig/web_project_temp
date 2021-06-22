<template>
  <div class="flex h-full w-full justify-center items-center bg-gray-darkest">
    <div class="justify-center items-center text-5xl relative">
      <div class="text-blue relative z-10">{{text}}</div>
      <div class="text_shadow text-indigo absolute z-0 left-2 top-1 w-96">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comp",
  props:['text'],
  data(){
    return{
    }
  },
  components:{
  },
  computed:{
  }
}
</script>
<style lang="less" scoped>
@import "res/style/comp.less";
.text_shadow{
  opacity: 0.2;
}
</style>