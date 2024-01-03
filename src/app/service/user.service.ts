import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private message: MessageService) { }

  users: User[] = [
    new User("John", "male"),
    new User("done", "male")
  ]

  userDetaileClike: EventEmitter<User> = new EventEmitter<User>()

  onShowUser(user:User){
    this.userDetaileClike.emit(user)
  }

  getAllUsers() {
    return this.users
  }

  userCreate(name: string, gender: string) {
    let user = new User(name, gender)
    this.users.push(user)
    this.message.LogMessage(name)
  }
}
