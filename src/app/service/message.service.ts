import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  LogMessage(name: string): void {
      alert(`A new user with name ${name} with status Active is added to user list`)
  }
}
