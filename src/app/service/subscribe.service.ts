import { Injectable  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
 
  constructor() { }

  onSubscribeClick(type:string){
    alert('Thnk you for '+type+' subscription,You can access to service')
  }
}
