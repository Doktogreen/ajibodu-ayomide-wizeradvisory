import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  @Input() cardNumber: string;
  @Input() cardHolderName: string;
  @Input() cardExpiryYear: string;
  @Input() cardExpiryMonth: string;
  constructor() { }
  ngOnInit(): void {
  }

}
