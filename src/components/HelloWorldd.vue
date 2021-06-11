<template>
  <h1>{{ $route.query.value }}</h1>
  <div id="app">
    <h1>Todos</h1>
    <input type="text" v-model="todoName" @keyup.enter="addTodo" />
    <ul>
      <li v-for="todo of todos" :key="todo.id">
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3000/todos";

export default {
  name: "app",
  data() {
    return {
      todos: [
        {
          id: 0,
          name: "Go to the gym",
        },
        {
          id: 1,
          name: "Walk the dog",
        },
        {
          id: 2,
          name: "Get some pizza",
        },
        {
          name: "Buy some milk",
          id: 3,
        },
      ],
      todoName: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(baseURL);

      this.todos = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async addTodo() {
      const res = await axios.post(baseURL, { name: this.todoName });

      this.todos = [...this.todos, res.data];

      this.todoName = "";
    },
  },
};
</script>

<style>
</style>
