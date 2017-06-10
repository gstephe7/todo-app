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
    <todo-list v-bind:list="list"></todo-list>

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
