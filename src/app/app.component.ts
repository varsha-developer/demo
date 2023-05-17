import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';

 confirmPassword = new FormControl('', Validators.required);
  userform =new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    // confirmPassword = new FormControl('', Validators.required),
    confirmPassword: this.confirmPassword
  })
  constructor(){

  }

  ngOnInit(): void {
    
  }

  submit(){
    if(this.userform.valid){
      
    
    if(this.userform.value.password !== this.userform.value.confirmPassword){
  console.log('password do not match')
    }
    console.log('data submit successfully')
  }else{
    console.log('please fill out all requred form')
  }
  }
}
