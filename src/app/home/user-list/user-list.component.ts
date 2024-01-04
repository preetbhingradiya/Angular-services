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
  Oneuser: any[] = []
  constructor(private getUser: UserService) { }

  showUserdetaile(user: User) {
    let finde = this.getUser.getAllUsers().filter((ele) => ele == user)
    this.Oneuser = finde
  }
    userList = this.getUser.getAllUsers()

}
