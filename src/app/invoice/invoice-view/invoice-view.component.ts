import { Component, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';

import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  invoice: Invoice = {} as Invoice;

  subscription: Subscription;

  constructor(private invoiceService: InvoiceService) { 
    const source = interval(10000);
    this.subscription = source.subscribe(val => {
      this.invoiceService.getInvoice(this.invoice);
    });
  }

  ngOnInit() {
    this.invoiceService.invoiceEmitter.subscribe(invoice => this.invoice = invoice);
    this.invoiceService.selectedInvoiceEmitter.subscribe(invoice => this.invoice = invoice);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
