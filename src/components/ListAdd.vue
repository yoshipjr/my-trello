<template> 
  <!-- ★ここから追記 -->
  <!-- submitボタンが押下時にaddlistというvueのメソッドを使用する -->
  <form class="addlist" @submit.prevent="addList">
    <!-- v-on（＠）とv-bind（：）を同時行う -->
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
           @focusin='startEditing'
           @focussout='finishEditng'
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
  <!-- ★ここまで追記 --> 
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      isEditing: false,
    }
  },

  computed: {
    classList(){
      const classList = ['addlist']
      if(this.isEditing) {
        classList.push('active')
      }
      return classList
    },
  },
  // ★ここから追記
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing(){
      this.isEditing = false
    }
  }
 // ★ここまで追記
}
</script>
