<template>
  <v-container id="app">
    <div class="input">
      <v-text-field v-model="text" @keypress.enter="post()" />
      <v-btn @click="post()">POST</v-btn>
    </div>
    <v-flex id="lista" v-for="(item, index) in lista" :key="index">
      <span>{{ item }}</span>
      <!-- <v-btn @click="excluir(item._id)">Excluir</v-btn> -->
    </v-flex>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data: () => ({
    text: "",
    lista: [],
  }),

  created() {
    // axios
    //   .get(`${this.$baseURL}/`)
    //   .then(response => (this.lista = response.data));
    console.log(this.$socket);
    this.$socket.$subscribe("post", (data) => {
      this.lista.unshift(data.text);
      console.log(data);
    });
    // this.sockets.subscribe("delete", data => {
    //   this.lista = this.lista.filter(item => item._id !== data._id);
    // });
  },

  destroyed() {
    this.$socket.$unsubscribe("post");
  },

  methods: {
    excluir(id) {
      axios.delete(`${this.$baseURL}/${id}`);
    },
    post() {
      axios
        .post(`${this.$baseURL}/`, { text: this.text })
        .then(() => (this.text = ""));
    },
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
}
#lista,
.input {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#lista {
  border: 1px solid gray;
  padding: 4px;
  border-radius: 5px;
}
</style>
