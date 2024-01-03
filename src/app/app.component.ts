import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscribeService } from './service/subscribe.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SubscribeService]   // WHAT TO PROVIDE
})
export class AppComponent {
  title = 'services';

  // HOW TO PROVIDE DEPENDENCIES
  constructor(private service: SubscribeService,) { }

  Onsubscribe(){
    this.service.onSubscribeClick("monthly")
    // let subscription =new SubscribeService()
    // subscription.onSubscribeClick("monthly")
  }
}
