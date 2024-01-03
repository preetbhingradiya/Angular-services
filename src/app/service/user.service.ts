import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[]=[
    new User("John","male"),
    new User("done","male")
  ]

  getAllUsers(){
    return this.users
  }

  userCreate(name:string,gender:string){
     let user=new User(name,gender)
    this.users.push(user)
  }
}
