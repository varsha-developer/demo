import { Component, OnInit } from '@angular/core';
// import {Todos  } from "../../Todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  implements OnInit{

todos:any

constructor(){
  this.todos = [{
  sno:1,
  title:"this is title",
  dsc:"description",
  active:true
},
{
  sno:2,
  title:"this is title2",
  dsc:"description",
  active:true
},
{
  sno:3,
  title:"this is title3",
  dsc:"description",
  // active:true
}]
}
  ngOnInit(): void {
    
  }

  deletetodo(todo:any){
console.log(todo)
const index =this.todos.indexOf(todo)
this.todos.splice(index,1)
  }
}
