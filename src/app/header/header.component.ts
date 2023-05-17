import { Component, OnInit } from '@angular/core';
import { AllsataService } from '../allsata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
abc:any
  data: any;
  kra = 'Your KRA text here';
 
  constructor( private fb:FormBuilder, private serv: AllsataService, private router:Router,) { }
 
  form = this.fb.group({
    name:['',Validators.required],
    kra: ['',Validators.required],
    status:['',Validators.required]
  })

  ngOnInit() {
    this.getData();

    
  }

  getData() {
    this.serv.getData().subscribe((resp) => {
      console.log(resp);
      this.data = resp
    });
  }

 
  
  
  onSave() {
    if (this.form.valid) { 
      let obj = {
        name: this.form.value.name,
        kra: this.form.value.kra,
        status: this.form.value.status
      };
      this.serv.setData(obj).subscribe((resp) => {
        console.log(resp);
        this.router.navigate(["/body"]); // navigate to the "body" component
      });
    }
  }
  
  saveChanges() {
    if (this.abc) {
      let obj= {
        name: this.form.value.name,
        kra: this.form.value.kra,
        status: this.form.value.status,
        id: this.abc.id,
      };
      this.serv.updatedata(this.abc.id,obj).subscribe((resp) => {
        this.data = resp; 
        console.log(resp)
      });
      
    }
    
    this.router.navigate(['/body']); // navigate to the "body" component
    this.getData()
  }
  
  onClose() {
    this.form.reset();
  }


  
 

  showPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.display = "block";
    }
  }
  
}
