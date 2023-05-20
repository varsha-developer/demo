import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb:FormBuilder,private service:UserService, private router:Router){}

userForm=this.fb.group({
  email:["",Validators.required],
  password:["",Validators.required,Validators.minLength(8), Validators.maxLength(8)]
})
  ngOnInit(){
  this.getUser()
  }

getUser(){
  this.service.getuserdata().subscribe((resp)=>{
    console.log(resp)
  })
}

  submit(){
//  console.log(this.userForm.value)
// if(this.userForm.valid){
 let obj={
  email:this.userForm.value.email,
  password:this.userForm.value.password,
  id:""
 }
 this.service.postuserdata(obj).subscribe((resp)=>{
  console.log(resp)
 })
// }
  this.getUser()
  this.router.navigate(['./home'])
  }

}
