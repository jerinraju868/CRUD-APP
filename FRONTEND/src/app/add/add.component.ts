import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  angForm : FormGroup

  constructor(private fb:FormBuilder,private service:DataService, private router:Router) 
  { 
    this.angForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void 
  {
    
  }
  postData(data:any)
  {
    this.service.postData(this.angForm.value).subscribe((data)=>{
      this.router.navigate(['list/'])
    }
    )
  }

}
