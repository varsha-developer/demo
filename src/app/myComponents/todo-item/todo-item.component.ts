import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:any
@Output() todoDelete:EventEmitter<any> = new EventEmitter();
  constructor(){

  }

  ngOnInit(){

  }
  onClick(todo:any){
    this.todoDelete.emit(todo)
    console.log('onclick has been trigger')
  }
}
