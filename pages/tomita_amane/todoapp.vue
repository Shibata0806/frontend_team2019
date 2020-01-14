<template>
  <div class="container">
    <h1>todoアプリ</h1>
    <div class="input-my-name">
      <p>新しい作業の追加</p>
      <input type="text" v-model="myTodo" />
      <button @click="addToDo">追加</button>
    </div>

    <div class="table">
      <p>作業前</p>
      <table border="1">
        <tr v-for="(todo , index) in todoList" v-bind:key="index">
          <input type="checkbox" :value="index" v-model="checkedTodoList" />
           {{1+index}} : {{todo}}
          <button @click="deleteToDo(index)">削除</button>
        </tr>
      </table>
      <button @click="moveToDoingList()">作業中へ移動</button>
    </div>

    <div class="table">
      <p>作業中</p>
      <table>
        <tr v-for="(doing , index) in doingList" v-bind:key="index">
          <input type="checkbox" :value="index" v-model="checkedDoingList" />
          {{1+index}} : {{doing}}
          <button @click="deleteDoing(index)">削除</button>
        </tr>
      </table>
      <button @click="moveDoneList()">完了へ移動</button>
    </div>

    <div class="table">
      <p>完了</p>
      <table>
        <tr v-for="(done , index) in doneList" v-bind:key="index">
          <input type="checkbox" :value="index" v-model="checkedDoneList" />
          {{index}} : {{done}}
          <button @click="deleteDone(index)">終了</button>
        </tr>
      </table>
    </div>

    <div class="links">
      <nuxt-link to="/" class="button--green">トップページへ</nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  head: {
    title: "todoアプリ"
  },
  data() {
    return {
      myTodo: "",
      todoList: [],
      doingList: [],
      doneList: [],
      checkedTodoList: [],
      checkedDoingList: [],
      checkedDoneList:[]
    };
  },

  methods: {
    // タスク追加（作業前に追加）
    addToDo: function() {
      console.log(this.myTodo);
      // 空文字の場合
      if (this.myTodo === "") {
        return;
      }

      this.todoList.push(this.myTodo);
      this.myTodo = "";
    },

    // 作業前から削除
    deleteToDo: function(index) {
      console.log(index);
      this.todoList.splice(index, 1);
      // 初期化の処理、チェックを外す
      this.checkedTodoList = [];
    },

    // 作業前から作業中へ移動
    moveToDoingList: function() {
      // チェックを付けられたタスクを作業中へ移動
      for (let i = 0; i < this.checkedTodoList.length; i++) {
        this.doingList.push(this.todoList[this.checkedTodoList[i]]);
      }
      // 作業中に移したタスクを作業前から削除
      for (let i = this.checkedTodoList.length - 1; i >= 0; i--) {
        this.todoList.splice(this.checkedTodoList[i], 1);
      }
      // 初期化の処理、チェックを外す
      this.checkedTodoList = [];
    },

    // 作業中から削除
    deleteDoing: function(index) {
      console.log(index);
      this.doingList.splice(index, 1);
      // 初期化の処理、チェックを外す
      this.checkedDoingList = [];
    },

    // 作業中から完了へ移動
    moveDoneList: function() {
      // チェックを付けられたタスクを完了へ移動
      for (let i = 0; i < this.checkedDoingList.length; i++) {
        this.doneList.push(this.doingList[this.checkedDoingList[i]]);
      }
      // 完了に移したタスクを作業中から削除
      for (let i = this.checkedDoingList.length - 1; i >= 0; i--) {
        this.doingList.splice(this.checkedDoingList[i], 1);
      }
      // 初期化の処理、チェックを外す
      this.checkedDoingList = [];
    },

    // 完了から削除
    deleteDone: function(index) {
      this.doneList.splice(index, 1);
      this.checkedDoneList = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 20px 20px 20px 20px;
}
h1 {
  font-size: 30px;
}
.input-my-name {
  margin: 20px 0 30px 0;
}
.input-my-name p {
  margin: 20px 0 10px 0;
}
.render-my-name {
  margin: 20px 0 10px 0;
}
.my-name {
  margin: 0 0.3em 0 0.3em;
  font-size: 2em;
}
.links {
  padding-top: 15px;
}
.table {
  margin-bottom: 20px;
  width: 400px;

  p {
    padding: 5px 10px;
    border-bottom: solid 1px rgb(136, 136, 136);
    border-left: solid 7px rgb(149, 158, 245);
    margin-bottom: 5px;
  }
}
</style>
