import { Component, OnInit, EventEmitter } from '@angular/core';

import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[] = [];


  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(invoices => this.invoices = invoices);
    this.invoiceService.invoiceEmitter.subscribe(invoice => this.invoices.unshift(invoice));
  }

  onClick(invoice: Invoice) {
    this.invoiceService.selectInvoice(invoice);
  }
}
