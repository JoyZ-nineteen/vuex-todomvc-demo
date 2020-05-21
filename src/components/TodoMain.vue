<template>
  <section class="main">
    {{username}}
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li @dblclick="showEdit(item.id)" :class="{completed: item.completed, editing: item.id === clickId}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @change="changeState({id: item.id})">
          <label>{{ item.name }}</label>
          <button class="destroy" @click="delTodo({id: item.id})"></button>
        </div>
        <input class="edit" :value="item.name" @keyup.enter="updateTodo(item.id, $event)">
      </li>
    </ul>
  </section>
</template>

<script>
// 辅助函数1： 导入这个辅助函数
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      clickId: -1
    }
  },
  // computed: {
  //   // 辅助函数
  //   list() {
  //     return this.$store.state.list
  //   },
  //   username() {
  //     return this.$store.state.username
  //   }
  // },
  computed: {
    ...mapState(['list', 'username'])
  },
  methods: {
    // delTodo: 是vuex中的mutations中的delTodo，映射到methods中
    // 所以 直接 delTodo 相当于  $store.commit('delTodo')
    ...mapMutations(['delTodo', 'changeState']),
    // delTodo(id) {
    //   // console.log(id)
    //   this.$store.commit('delTodo', {id})
    // },
    // changeState(id) {
    //   // console.log(id)
    //   this.$store.commit('changeState', {id})
    // },
    showEdit(id) {
      this.clickId = id
    },
    updateTodo(id, e) {
      this.clickId = -1
      this.$store.commit('updateTodo', { id, name: e.target.value})
    }
  }
}
</script>

<style>

</style>
