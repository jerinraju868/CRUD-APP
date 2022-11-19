import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  std: any;

  constructor(private service:DataService, private http:HttpClient) { }

  
  ngOnInit(): void {
   
    this.getData();
    
  }
  getData()
  {
    this.std = this.service.getData().subscribe(data=>{
      this.std = data;
      console.log(this.std)
    })
  }
  deleteData(id:any)
  {
    this.service.deleteData(id).subscribe(()=>{
      this.getData();

    })
  }
}
