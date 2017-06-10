<template>

  <!-- List -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ul>
          <li v-for="item in list">
            <list-item v-bind:list="list"></list-item>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import ListItem from './todo-listitem.vue'

  Vue.component('list-item', ListItem)

  export default {
    props: ['list']
  }
</script>

<style>

</style>
