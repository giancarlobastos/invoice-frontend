import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  invoice = {
    "invoiceNumber": 20,
    "invoicePaymentAddress": "msrSmi5FgrpNP2MCoYBtFTX4T4w9684ZGb",
    "from": "email@email.com",
    "to": "email@email.com",
    "dueDate": new Date("2019-05-28"),
    "description": "test",
    "totalAmount": 10,
    "totalAmountPaid": 0
  };

  constructor() { }

  ngOnInit() {
  }

}
