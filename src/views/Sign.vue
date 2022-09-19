<template>
    <div>
      
      <nav class="flex items-center m-14 mb-[300px] place-content-around">
        <a class="nav-brand mr-10 text-2xl font-bold hover:text-slate-400" href="/">Devlog</a>
        <a class="nav-item ml-20 text-xl hover:text-slate-400" href="https://github.com/dya-code/">Github</a>
        <!-- <a class="nav-item text-xl" href="https://discord.com/users/884954874943520788/">Discord</a> -->
      </nav>
  
      <div class="flex justify-center items-center">

        <div class="form">
          <div class="text-2xl">Password</div>
          <input class="pw p-2 mb-10 w-80 bg-slate-700 rounded" />
          <button class="btn p-1 m-8 bg-slate-800 rounded text-2xl">Sign in</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    
    export default {
      name: 'IndexPage',
    }
  </script>
    
  <style>
  </style>
    