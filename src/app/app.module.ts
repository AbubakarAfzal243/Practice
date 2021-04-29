import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { XyzComponent } from './xyz/xyz.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { UsersComponent } from './users/users.component';
import { AdmingHomeComponent } from './adming-home/adming-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    ReversePipePipe,
    XyzComponent,
    CustomDirectiveDirective,
    UsersComponent,
    AdmingHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
