<template>
    <h1 class="title">{{title}} <small>{{text}}</small></h1>
</template>

<script>
export default {
  name: 'xtx-title',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.title{
        font-size: 16px;
        font-weight: 400;
        margin-left: 6px;
        small{
            font-size: 12px;
            color: #999;
            margin-left: 5px;
        }
}
</style>
