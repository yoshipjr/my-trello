import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// loacatstorga 保存したリストを取得する 保存するデータをキーと値のセットで扱う
// localStorage.getItem('設定したキー')
const savedLists = localStorage.getItem('trello-list')

// 以下のコードでストアインスタンスを取得し、main.jsでインポートできるように
// export default している

const store = new Vuex.Store({
    // アプリケーション全体のデータの状態を管理する
    state: {
      // list型のlistを宣言する
      // localstorage にはJSON形式の文字列型でデータの保存がされているので、取得する時には
      // JSON.parse(取得するデータ)でオブジェクトに返還する
      list: savedLists ? JSON.parse(savedLists): [
        {
          title:  'Backlog',
          cards: [
            {body: 'English'},
            {body: 'Mathematics'},
          ]
        },
        {
          title: 'Todo',
          cards: [
            { body: 'Science' }
          ]
        }

      ],
    },
    // state の更新を行う
    mutations: {
      addlist(state, payload){
        state.lists.push({title: payload.title, cards:[]})
      },
    },
    // mutations の呼び出しを行う。非同期通信もここで行う。
    actions: {
      // addlistメソッドはstate のデータへリストの追加をおこなう.
      // mutations の呼び出しをここで行う
      addlist(context, payload){
        context.commit('addlist',payload)
      },
    },
    // stateの値を算出したものを返す場合に役に立つ
    getters: {
    }

    // subscribeはストアのインスタンスメソッドで全てのmutationの後に呼ばれる
    // 第一引数にmutaionのインスタンス、第二引数にmutaion後のデータの状態を受け取る
    store.subscribe((mutation, state) => {
      // localstorageへデータの状態を保存している
      // 保存する時には上記のように任意のキーをせってして、データを文字列型に変換して保存する・
      // データを文字列型にするにはJSON.stringify(保存するデータ)でJSON形式に変換する
      localStorage.setItem('trello-lists', JSON.stringify(state.lists))
    })

    export default store
})