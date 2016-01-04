/// <reference path="typings/tsd.d.ts" />

angular.module("myApp",['ngMaterial','ngMdIcons'])
.controller("myCtrl",function(filterFilter){
   var  self = this;
    self.Todo = [{
        todo : "Todo",
        selected : false
    }];
    this.remainig = 1;
    this.getTotalTodo = function(){
        return self.Todo.length;
    }
    this.archive =function(index){
        if(!self.Todo[index].selected){
         self.remainig--;    
    }else {
        self.remainig++;
    }
    }
    this.remove = function(){
             self.Todo = filterFilter(self.Todo ,function(addtodo){
                    return ! addtodo.selected  
             })
         
     }
    
    this.Add = function(){
       self.Todo.push({todo : self.TodoData.todo , selected : false});
       self.remainig++;
       self.TodoData.todo= "";
    }
 
})