<template>
  <div>
    
    <nav class="flex items-center m-14 mb-[300px] place-content-around">
      <div class="nav-brand mr-10 text-2xl font-bold text-slate-200" href="/">Devlog</div>
      <a class="nav-item ml-20 text-xl text-slate-300" href="/sign">&lt;]</a>
      <!-- <a class="nav-item ml-20 text-xl hover:text-slate-400" href="https://github.com/dya-code/">Github</a> -->
      <!-- <a class="nav-item text-xl" href="https://discord.com/users/884954874943520788/">Discord</a> -->
    </nav>

    <div class="cards flex justify-center flex-wrap xl:ml-[250px] xl:mr-[250px] place-content-around">

      <!-- Card -->
      <Card v-for="i in arr" v-bind:id="i.key" v-bind:Title="i.title" v-bind:Content="i.content" />

    </div>

    <div class="footer flex items-center m-14 mt-[300px] place-content-around">
      <div class="nav-brand text-xl text-slate-200">Made with ❤️ by DIA</div>
      
      <!-- <a class="nav-item text-xl" href="https://discord.com/users/884954874943520788/">Discord</a> -->
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios'
  import Card from '../components/Card'
  export default {
    name: 'IndexPage',
    components: {
      Card,
    },
    data() {
      return {
        arr: [],
      }
    },
    created() {
      this.getView()
    },
    methods: {
      async getView () {
        try {
          await axios.get("http://localhost:3001/view").then( res => this.arr = res.data.blogs )
          console.log(this.arr[0].title)
        } catch (err) {
          throw err
        }
      }
    }

  }
</script>

<style>
</style>
