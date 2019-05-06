import { Component, OnInit, EventEmitter } from '@angular/core';

import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];

  subscription: Subscription;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceService.invoiceEmitter.subscribe(invoice => this.invoices.push(invoice));
    this.loadInvoices();
    
    const source = interval(10000);
    this.subscription = source.subscribe(val => this.loadInvoices());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onClick(invoice: Invoice) {
    this.invoiceService.selectInvoice(invoice);
  }

  loadInvoices() {
    this.invoiceService.getInvoices().subscribe(invoices => this.invoices = invoices);
  }
}
