import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  status : any = '';


  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {

   this.httpService.getData().subscribe(data => {
      this.status = data;

      console.log(this.status)
    })
  }

}
