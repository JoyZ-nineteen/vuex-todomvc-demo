import Vue from 'vue'
import Vuex from 'vuex'
// 在模块化环境中，插件都必须调用Vue.use
Vue.use(Vuex)

const state = {
  // 任务列表
  list: [
    { id: 1, name: '学习vue', completed: true },
    { id: 2, name: '找工作', completed: false },
    { id: 3, name: '挣钱', completed: false }
  ],
  username: '哈哈哈'
}

const mutations = {
  delTodo(state, payload) {
    let idx = state.list.findIndex(item => item.id === payload.id)
    state.list.splice(idx, 1)
  },
  addTodo(state, payload) {
    state.list.unshift({
      id: +new Date(),
      name: payload.name,
      completed: false
    })
  },
  changeState(state, payload) {
    // 根据id找到需要修改的下标
    let idx = state.list.findIndex(item => item.id === payload.id)
    // 修改对应下标的状态
    state.list[idx].completed = !state.list[idx].completed
  },
  updateTodo(state, payload) {
    let idx = state.list.findIndex(item => item.id === payload.id)
    state.list[idx].name = payload.name
  },
  clearTodo(state) {
    state.list = state.list.filter(item => !item.completed)
  }
}

// vuex中的getters和vue实例中的computed非常像,,,,,,getters根据state计算出来一些属性
const getters = {
  leftCount(state) {
    return state.list.filter(item => !item.completed).length
  },
  isShowFooter(state) {
    return state.list.length > 0
  },
  isShowClear(state) {
    return state.list.some(item => item.completed)
  }
}


const actions = {
  // 包含任意的异步操作
  // context: 上下文， 这个context对象拥有和vuex实例相同的方法
  clear({commit}) {
    setTimeout(() => {
      // 提交mutations
      commit('clearTodo')
    }, 1000)
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions
})

export default store
