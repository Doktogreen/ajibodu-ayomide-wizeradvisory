import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() cardNumber: string;
  @Input() cardHolderName: string;
  @Input() cardExpiryYear: string;
  @Input() cardExpiryMonth: string;
  title = 'raphael-ajibodu-wizeradvisory';
}
