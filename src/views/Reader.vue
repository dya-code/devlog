<template>
    <div>
      
      <nav class="flex items-center m-14 mb-[300px] place-content-around">
        <div class="nav-brand mr-10 text-2xl font-bold hover:text-slate-400" href="/">Devlog</div>
        <a class="nav-item ml-20 text-xl hover:text-slate-400" href="https://github.com/dya-code/">Github</a>
        <!-- <a class="nav-item text-xl" href="https://discord.com/users/884954874943520788/">Discord</a> -->
      </nav>

      <div class="reader">{{ readinf }}</div>
  
      <div class="footer flex items-center m-14 mt-[300px] place-content-around">
        <div class="nav-brand text-xl hover:text-slate-500">Made with ❤️ by DIA</div>
        <a class="nav-item ml-20 text-xl hover:text-slate-500" href="/sign">&lt;]</a>
        <!-- <a class="nav-item text-xl" href="https://discord.com/users/884954874943520788/">Discord</a> -->
      </div>
      
    </div>
  </template>
  
  <script>
    import axios from 'axios'
    export default {
      name: 'Reader',
      props: {
        id: Number,
      },
      data() {
        return {
          readinf: {}
        }
      },
      created() {
        this.getRead()
      },
      methods: {
        async getRead () {
          try {
            await axios.get(`http://localhost:3001/read/${this.id}`).then( res => this.readinf = res.data )
            console.log('reader info > ' + this.readinf)
          } catch (err) {
            throw err
          }
        }
      }
  
    }
  </script>
  
  <style>
  </style>
  