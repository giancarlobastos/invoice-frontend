import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  invoice: Invoice = {} as Invoice;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoiceService.invoiceEmitter.subscribe(invoice => this.invoice = invoice);
    this.invoiceService.selectedInvoiceEmitter.subscribe(invoice => this.invoice = invoice);
  }

}
