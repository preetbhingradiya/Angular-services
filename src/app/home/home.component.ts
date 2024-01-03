import { Component } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,UserListComponent,FormsModule,UserDetailComponent],
  templateUrl: './home.component.html',
  providers:[{provide:UserService,useClass:UserService}]  // INJECTION TKENS
})
export class HomeComponent {
  constructor(private createUser:UserService){}

  name:string=''
  gender:string='Male'

  onSubmit(){
    this.createUser.userCreate(this.name,this.gender)
    console.log(this.createUser.users)
  }

  Onsubscribe() {
    let subscription =new SubscribeService()
    subscription.onSubscribeClick("Yearly")
  }
}
