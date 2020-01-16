<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Boardコンポーネントの呼び出し -->
    <board />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // コンポーネントに登録する
    Board
  }
}
</script>


