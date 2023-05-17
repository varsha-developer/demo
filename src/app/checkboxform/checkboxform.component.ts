import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllsataService } from '../allsata.service';
import { ChechservService } from '../chechserv.service';

@Component({
  selector: 'app-checkboxform',
  templateUrl: './checkboxform.component.html',
  styleUrls: ['./checkboxform.component.css']
})
export class CheckboxformComponent implements OnInit{


constructor(private fb:FormBuilder, private service:ChechservService){

}
form = this.fb.group({
  name:[" ",Validators.required],
  address:[" ",Validators.required],
  // hobbies:this.fb.group({
  //   dancing:[false],
  // singing:[false]

  // }),
  hobbies:[" ",Validators.required],
  gender:[" ",Validators.required]
})

ngOnInit(){
this.getcheckdata()
}

getcheckdata(){
  this.service.getcheck().subscribe((resp)=>{
    console.log(resp)
  })
}

submit(){
  let obj={
    name:this.form.value.name,
    address:this.form.value.address,
    hobbies:this.form.value.hobbies,
    gender:this.form.value.gender,
    
  }
this.service.postcheck(obj).subscribe((responce)=>{
  console.log(responce)
})
this.getcheckdata()
}
}








