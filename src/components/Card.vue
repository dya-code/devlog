<template>
  <div class="card m-8 w-72 h-80 bg-[#252628] rounded shadow-xl hover:shadow-2xl brightness-75 hover:brightness-95" id=id>
    <img class="card-img rounded w-full h-[130px] object-cover" src="../assets/unknown.png" />
    <div class="card-title text-slate-300 text-2xl m-10">{{ Title }}</div>
    <div class="card-content text-slate-500 text-xl m-10 truncate">{{ Content }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
        id: Number,
        Title: String,
        Content: String
    }
  }
</script>

<style>
</style>