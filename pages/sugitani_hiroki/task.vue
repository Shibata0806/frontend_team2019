<template>
  <div>
   <hr size="30" color="lightgreen">
  <div>タスクリスト</div>
  <label for="start">Start date:</label><br>
  <input type="date" id="start" name="trip-start" v-model="date"  value="2019-12-22"
       min="2019-12-01" max="2020-12-31"><br>
    
    <input id="textBox1" v-model="n_textBox1" type="text" value />
    <input type="button" value="Exec" @click="onButtonClick();" /><br>
      <label for="clear">Clear date:</label><br>
    <input type="date" id="cDate" name="trip-clear" v-model="cDate"  value="2019-12-22"
       min="2019-12-01" max="2020-12-31"><br>
    <input id="textBox2" v-model="n_textBox2" type="text" value />
    <input type="button" value="clear" @click="onButtonClickclear();" />
    <hr />
    <div class="render-my-name" v-if="dayList.length != 0">
      <p>
          <div id="example-1">
            <div v-for="(todoList, day) in dayList">・{{day}}
              <ul>
                <li v-for="(todo, index) in todoList">{{todo}}</li>
              </ul>
            </div>
          </div>
      </p>
  </div>
  <hr size ="30">
   <div class="links">
      <nuxt-link to="sample" class="button--green">個人ページへ</nuxt-link>
    </div>
  </div>
</template> 

  <script type="text/javascript" language="javascript">
export default {
  head: {
    title: "taskSave"
  },
  data() {
    return {
      n_textBox1: "",
      n_textBox2: "",
      myTasklist: [],
      dayList:{},
      date :"",
      cDate :""
    };
  },
  methods: {
    //inputに入力された値を
    onButtonClick: function() {
      if(! this.dayList[this.date]){
        console.log(this.n_textBox1)
      this.dayList[this.date] =[];
      }
      if(this.n_textBox1.length > 0){
        this.dayList[this.date].push(this.n_textBox1)
      }
     this.n_textBox1 ="";
    },
   onButtonClickclear:function(){
    var tmpArray =[]
    var todo = this.dayList[this.cDate]
    for( var i=0;i<todo.length;i++){
      if(this.n_textBox2 != todo[i] ){
       tmpArray.push(todo[i])
      }
    }
    this.dayList[this.cDate] = tmpArray
    this.cDate= "";
    this.n_textBox2= "";
    }
  }
}
</script>

<style scoped>
h1 {
    font-size: 18px;
}

table {
    border-spacing: 0;
    border-collapse: collapse;
}

td {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: center;
}

td:first-child {
    color: red;
}

td:last-child {
    color: royalblue;
}
</style>
