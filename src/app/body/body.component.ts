import { Component, Input, OnInit } from '@angular/core';
import { AllsataService } from '../allsata.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { contact } from '../contactmodels';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   data:any

  abc: any;
  route: any;
   

  constructor(
    private serv: AllsataService, 
    private router: Router,
    private fb: FormBuilder
  ) { }
  form = this.fb.group({
    name: [''],
    kra: [''],
    status: ['']
  })

  ngOnInit() {
    this.getData();
    
  }

  getData() {
    this.serv.getData().subscribe((resp) => {
      this.data = resp;
    });
  }

  editItem(d:any){
    
    this.form.patchValue({
      name: d.name,
      kra: d.kra,
      status: d.status
      
    });
    this.abc = d;

  
    this.router.navigate(['/header'])
    
  }

  
   
  

  

  
  
  deleteItem(d: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.serv.deleteData(d.id).subscribe(() => {
        this.getData();
      });
    }
  }

 

    
  }
 
 

 
