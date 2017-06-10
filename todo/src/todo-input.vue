<template>

  <!-- Input -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="text-center">What Needs To Be Done Today?</h3>
        <div class="todo-input">
          <input class="input-box" type="text" v-model="newItem" v-on:keyup.enter="createItem()">
          <button class="input-btn" v-on:click="createItem()">ADD</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['list'],
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    createItem: function () {
      if (this.newItem) {
        this.list.push(this.newItem)
        this.newItem = ''
      }
    }
  }
}
</script>

<style>
  .todo-input {
    text-align: center;
  }

  .input-box {
    border-radius: 5px;
  }

  .input-btn {
    border-radius: 5px;
  }
</style>
