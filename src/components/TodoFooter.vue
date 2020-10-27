<template>
  <footer class="footer" v-show="isShowFooter">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ leftCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button v-show="isShowClear" class="clear-completed" @click="clear()">Clear completed</button>
  </footer>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['clear'])
    // clearTodo() {
    //   // this.$store.commit('clearTodo')
    //   this.$store.dispatch('clear')
    // }
  },
  // computed: {
  //   leftCount() {
  //     return this.$store.getters.leftCount
  //   },
  //   isShowFooter() {
  //     return this.$store.getters.isShowFooter
  //   },
  //   isShowClear() {
  //      return this.$store.getters.isShowClear
  //   }
  // }
  // 能够把vuex中的getters直接映射为vue实例的计算属性
  computed: {
    ...mapGetters(['leftCount', 'isShowFooter', 'isShowClear']),
    ...mapState(['username']),
    // 提供将来组件自己的计算属性
    n3() {
      return '哈哈'
    }
  }
}
</script>

<style>

</style>
