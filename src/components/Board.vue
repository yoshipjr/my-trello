<template>
  <!-- ここから追加 -->
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list-add/>
    </main>
  </div>
  <!-- ここまで追加 -->
</template>

<script>
// ここにJSを書きます
import ListAdd from './ListAdd.vue'
  //この宣言をすることでこのコンポーネントが他のコンポーネントから呼び出せるようになる 
  export default {
    components: {
      ListAdd
    },
  }

</script>
