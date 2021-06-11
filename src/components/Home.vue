<template>
  <div class="todo">
    <router-link to="/posts"></router-link>
    <div class="stick">
      <p id="demo"></p>
      <div class="top">
        <h3><span aria-label="Todo app icon"></span></h3>
      </div>

      <div class="search">
        <input
          ref="searchbar"
          type="text"
          v-model="searchbar"
          class="searchTerm"
          placeholder="Search here.."
          autofocus
        />

        <button type="submit" onclick="myFunction()" class="searchButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="results">
        <ul class="no-bullets">
          <li class="lii" v-for="(i, index) in getcount" :key="index">
            <router-link :to="`/posts?value=${repeat(searchbar, index + 1)}`">
              {{ repeat(searchbar, index + 1) }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, shallowReactive } from "vue";

export default {
  data() {
    return { searchbar: "", count1: 0 };
  },
  methods: {
    repeat: function (string, count) {
      let temp = "";

      // console.log("hi" + this.count1);
      for (let i = 0; i < count; i++) {
        temp = temp + string;
        //console.log(this.count1);
      }
      return temp;
    },
    mounted() {
      this.$refs.searchbar.$el.focus();
    },
  },

  computed: {
    getcount: function () {
      let string1 = "";
      string1 = this.searchbar.trim();
      console.log(string1);
      this.count1 = string1.length;
      return this.count1;
    },
  },
  //  message: function () {
  //   let arr = [];
  //   for (let i = 1; i <= this.searchbar.length; ++i) {
  //     for (let j = 1; j <= i; ++j) {
  //       arr.push(this.searchbar);
  //     }
  //   }

  // let result = arr.reduce((accumulator, current) => {
  //   return accumulator + current + "\n";
  //  }, "");
  //  return result;
  // return arr;
  //},
  // },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  min-height: 100vh;
  margin: 0 auto;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.stick {
  background-color: white;

  top: 0;
}

.status {
  margin-right: 10px;
  display: inline;
}

p {
  margin-left: 10px;
}

p:hover {
  background-color: black;
  color: white;
}
ul.no-bullets {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}
.todo {
  min-width: 600px;
  max-width: calc(30% + 10vw);
  border-radius: 4px;
  padding: 1em;
  background: transparent;
}
.searchTerm {
  width: 90%;
  border: 3px solid black;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: black;
}

.searchButton {
  position: sticky;
  width: 40px;
  height: 36px;
  top: 1000px;
  border: 1px solid black;
  background: black;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

li.lii:hover {
  background-color: black;
  color: white;
  text-decoration: none;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.search {
  position: sticky;
  z-index: 8;
  top: 0;
  background-color: white;
}
.results {
  word-wrap: break-word;
  user-select: none;
  overflow-x: auto;
  background-color: rgb(255, 255, 255);
  text-decoration: none;
  text-align: left;
  box-shadow: 5px 10px 28px rgb(165, 165, 165);
  border-radius: 0 0 15px 15px;
}

li.lii {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}

@media (max-width: 600px) {
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    min-height: 100vh;
    margin: 0 auto;
  }
  .todo {
    min-width: 300px;
    max-width: calc(30% + 10vw);
    border-radius: 4px;
    padding: 1em;
    background: white;
    word-wrap: break-word;
  }

  .searchTerm {
    width: 82%;
    border: 3px solid black;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
  }

  .searchTerm:focus {
    color: black;
  }

  .searchButton {
    position: sticky;
    width: 40px;
    height: 36px;
    top: 1000px;
    border: 1px solid black;
    background: black;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
  li.lii:hover {
    background-color: black;
    color: white;
    text-decoration: none;
  }

  ul.no-bullets {
    list-style-type: none; /* Remove bullets */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margins */
  }
  .search {
    position: sticky;
    z-index: 8;
    top: 0;
  }
  .results {
    word-wrap: break-word;
    user-select: none;
    overflow-x: auto;
    background-color: rgb(255, 255, 255);
    text-decoration: none;
    text-align: left;
    border-radius: 0 0 15px 15px;
    box-shadow: 5px 10px 28px rgb(165, 165, 165);
  }
}
</style>