<template>

  <!-- List Item -->
  <div>
    <i class="fa fa-check mark-complete" title="Mark Complete" v-on:click="markComplete()"></i>
    <i class="fa fa-exclamation mark-priority" title="Set as Priority" v-on:click="markPriority()"></i>
    <i class="fa fa-times clear" title="Remove Task" v-on:click="() => list.splice(index, 1)"></i>
    <p v-text="item" v-bind:class="{ complete : complete, priority : priority }"></p>
  </div>

</template>

<script>
export default {
  props: ['list'],
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
    border-radius: 10px;
    margin-top: 5px;
  }

  .clear {
    color: red;
    cursor: pointer;
  }

  .mark-complete {
    color: green;
    cursor: pointer;
  }

  .mark-priority {
    color: orange;
    cursor: pointer;
  }

  .complete {
    text-decoration: line-through;
    color: rgba(84, 198, 73, 1);
  }

  .priority {
    text-decoration: underline;
    font-weight: bold;
  }
</style>
