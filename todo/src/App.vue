<template>

  <div class="container">

    <!-- Title -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">TO-DO</h1>
        </div>
      </div>
    </div>

    <!-- Input -->
    <todo-input v-bind:list="list"></todo-input>

    <!-- To-Do List -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li v-for="(item, index) in list">
              <todo-list v-bind:list="list" v-bind:item="item" v-bind:index="index"></todo-list>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
