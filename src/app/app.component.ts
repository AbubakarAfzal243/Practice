import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ['testing', 'Ali', 'usman', 'umer'];

  name = "abc";

  show : boolean = false;

  doToggle(){
    this.show = !this.show;
  }

  
}
