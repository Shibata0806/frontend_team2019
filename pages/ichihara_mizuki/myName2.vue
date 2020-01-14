<template>
  <div class="appName">
    <h1 class="title">{{message}}</h1>
    <!-- 担当者一覧 -->
    <div class="todo">
      <input type="text" v-model.trim="you" placeholder="名前を入力してください" />
      <button @click="addName">save</button>
      <button @click="deleteMyName">delete</button>
    </div>

    <div class="todo">
      <input type="text" v-model.trim="myName" placeholder="入力してください" />
      <button @click="addObject">save</button>
      <button @click="deleteMyName">delete</button>
    </div>
    
    <div class="box1">
      <ul>
        <!-- templateは出力されない -->
        <template v-for="(item,index) in itemList">
          <!-- v-bind:keyには同じ値は入れてはいけない常に変わる文字（index的な） -->
          <li v-if="item.status === 0" v-bind:key="index">
            {{item.key}}
            <button @click.shift="removeItem(index)">削除</button>
            <button @click="startItem(index)">開始</button>
            <select v-model="selected">
              <option />
              <option v-for="(na,index) in nameList" v-bind:value="na.value" v-bind:key="index">  
                     {{na.youKey}}
                </option>
             
            </select>
          </li>
        </template>
      </ul>
    </div>

    <div class="box2">
      <ul>
        <template v-for="(item,index) in itemList">
          <li v-if="item.status === 1" v-bind:key="index">
            {{item.key}}
            <button @click.shift="removeItem(index)">削除</button>
            <button @click="endItem(index)">終了</button>
            <button @click="returnItem(index)">未達成に戻す</button>
            <select>
              <option />
              <option v-for="(na,index) in nameList" v-bind:key="index"><p>{{na.youKey}}</p></option>
            </select>
          </li>
        </template>
      </ul>
    </div>

    <div class="box3">
      <ul>
        <template v-for="(item,index) in itemList">
          <li v-if="item.status === 2" v-bind:key="index">
            {{item.key}}
            <button @click.shift="removeItem(index)">削除</button>
            <button @click="returnItem(index)">作業中に戻す</button>
            <select>
              <option />
              <option v-for="(na,index) in nameList" v-bind:key="index">{{na.youKey}}</option>
            </select>
          </li>
        </template>
      </ul>
    </div>
    <div class="todo">
      <nuxt-link to="/" class="button--green">トップページ</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 20px 20px 20px 20px;
}
.todo {
  text-align: center;
  margin: 20px 20px 20px 20px;
}
.box1 {
  text-align: center;
  width: 200px;
  position: absolute;
  left: 25px;
  top: 200px;
}
.box2 {
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 200px;
}
.box3 {
  position: absolute;
  right: 25px;
  top: 200px;
}
</style>

<script>
export default {
  data() {
    return {
      message: "ToDoアプリ",
      myName: "",
      itemList: [],
      you: "",
      nameList: [],
      va:0
    };
  },
  methods: {
    //inputに入力された値を
    deleteMyName: function() {
      this.myName = "";
    },
    addObject: function() {
      console.log(this.myName);

      if (this.myName == "") {
        return;
      }
      //未達成を0とする
      this.itemList.push({ key: this.myName, status: 0 });
      this.myName = "";
    },
    removeItem: function(number) {
      console.log(number);
      this.itemList.splice(number, 1);
    },
    startItem: function(index) {
      console.log(this.itemList[index].status);
      this.itemList[index].status += 1;
      this.itemList[index].person
    },
    endItem: function(index) {
      this.itemList[index].status += 1;
    },
    returnItem: function(index) {
      this.itemList[index].status -= 1;
    },
    addName: function() {
      console.log(this.you);
      if (this.you == "") {
        return;
      }

      this.nameList.push({ youKey: this.you,value: this.va});
      this.you = "";
    },
    showModal(){
        this.$modal.show('user-modal');
    }
  }
};
</script>