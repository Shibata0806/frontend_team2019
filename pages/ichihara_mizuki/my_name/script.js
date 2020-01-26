export default {
  data() {
      return {
          message: "ToDoアプリ",
          myName: "",
          items: [], 
                  }
  },
  methods: {
      //inputに入力された値を
      deleteMyName: function() {
          this.myName = "";
      },
      addObject: function(){
              console.log(this.myName)

              if(this.myName == ""){
                  return;
              }

              this.items.push(this.myName);
              this.myName = "";
      },
      removeItem: function(number){
          console.log(number);   
           this.items.splice(number,1);

      }
  },
}