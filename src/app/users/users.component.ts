import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  param = '';
  param1 = '';

  constructor(private activiatedRoute : ActivatedRoute) {
    this.activiatedRoute.params.subscribe(data=> {
      this.param = data.id;
      this.param1 = data.id1;
    })
   }

  ngOnInit(): void {
  }

}
