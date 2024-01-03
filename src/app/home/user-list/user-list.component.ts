import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  constructor(private getUser:UserService){}

  userList=this.getUser.getAllUsers()

  showUserdetaile(user:User){
    this.getUser.onShowUser(user)
  }
}
