import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() public title;

  @Input() public firstForm;
  

}
