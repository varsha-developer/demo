import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AllsataService } from '../allsata.service';
import { contact } from '../contactmodels';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // data: any;
  abc: any;

  // constructor( private fb:FormBuilder, private serv: AllsataService, private router:Router) { }

  // form = this.fb.group({
  //   name:['',],
  //   kra: ['',],
  //   status:['',]
  // })
  // ngOnInit() {
  //   this.getData();

    
  // }

  // getData() {
  //   this.serv.getData().subscribe((resp) => {
  //     console.log(resp);
  //     this.data = resp
  //   });
  // }
  // saveChanges() {
  //   let obj= {
  //     name: this.form.value.name,
  //     kra: this.form.value.kra,
  //     status: this.form.value.status,
  //     id: this.abc.id,
  //   };
  //   this.serv.updatedata(this.abc.id,obj).subscribe((resp) => {
  //     this.data = resp; // update data in component with updated data returned from server
  //     console.log(resp)
  //     this.router.navigate(['/body'])
  //   });
  //   this.getData()
  // }


 


  public contactid!:number;
  public contactdata:contact={ }as contact;
constructor(private serv: AllsataService,  private activateRoute:ActivatedRoute, private router:Router,private fb:FormBuilder)
{}
   form = this.fb.group({
    name:['',],
    kra: ['',],
    status:['',]
  })

ngOnInit():void{
  this.activateRoute.params.subscribe((param:Params)=>{
    this.contactid=param['id']
  })
  // this.serv.fetchdata(this.contactid).subscribe((resp)=>{
  //   this.contactdata=resp;
  //   console.log(resp)
  // })
}
update()
{
  this.serv.updatedata(this.contactdata,this.contactid).subscribe((resp)=>{
    alert("Data updated sucessfully")
    this.router.navigate(['/contactlist'])
  })
}
}
