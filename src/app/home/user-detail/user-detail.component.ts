import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent   {
  //  selectUser:User
  // constructor(private userservice:UserService){}

  //  ngOnInit() {
  //    this.userservice.userDetaileClike.subscribe((data:User)=>{
  //       this.selectUser = data
  //       console.log(this.selectUser)
  //    })
  //  }
}
