<template>

  <!-- List Item -->
  <div class="todo-item">
    <i class="fa fa-check mark-complete" title="Mark Complete" v-on:click="markComplete()"></i>
    <i class="fa fa-exclamation mark-priority" title="Set as Priority" v-on:click="markPriority()"></i>
    <i class="fa fa-times clear" title="Remove Task" v-on:click="() => list.splice(index, 1)"></i>
    <span class="list-text" v-text="item" v-bind:class="{ complete : complete, priority : priority }"></span>
  </div>

</template>

<script>
export default {
  props: ['list', 'item', 'index'],
  data: function () {
    return {
      complete: false,
      priority: false
    }
  },
  methods: {
    markComplete: function () {
      this.complete = !this.complete
      this.priority = false
    },
    markPriority: function () {
      if (this.complete === false) {
        this.priority = !this.priority
      }
    }
  }
}
</script>

<style>
  li {
    list-style-type: none;
  }

  .todo-item {
    border: thin lightgrey solid;
    border-radius: 15px;
    margin-top: 5px;
    margin-left: -25px;
  }

  .clear {
    color: red;
    cursor: pointer;
    opacity: .5;
    font-size: 20px;
  }

  .clear:hover {
    opacity: 1;
  }

  .mark-complete {
    color: green;
    cursor: pointer;
    opacity: .5;
    font-size: 20px;
  }

  .mark-complete:hover {
    opacity: 1;
  }

  .mark-priority {
    color: orange;
    cursor: pointer;
    opacity: .5;
    font-size: 20px;
  }

  .mark-priority:hover {
    opacity: 1
  }

  .complete {
    text-decoration: line-through;
    color: rgba(84, 198, 73, 1);
  }

  .priority {
    text-decoration: underline;
    font-weight: bold;
  }

  .list-text {
    font-size: 24px;
    margin: 20px;
  }
</style>
