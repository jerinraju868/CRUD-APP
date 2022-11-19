import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  angForm:FormGroup
  id:any
  constructor(private fb:FormBuilder, private service:DataService, private activatedRoute:ActivatedRoute, private router:Router) 
  {
    this.angForm = this.fb.group(
      {
        firstname:['', Validators.required],
        lastname:['', Validators.required],
        dob:['', Validators.required],
        email:['', Validators.required],
        username:['', Validators.required],
        password:['', Validators.required],
      }
    )
  }

  ngOnInit(): void 
  {
    this.activatedRoute.paramMap.subscribe(paramId =>{
      this.id =paramId.get('id');
      console.log(this.id)
      
      this.service.getsingleData(this.id).subscribe(data=>{
        this.angForm.patchValue(data);
      })
    })
  }
  postData(data:any)
  {
    this.service.putData(this.id, this.angForm.value).subscribe(data=>{
      this.router.navigate([''])
    })
  }

}
