import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices$: Observable<Invoice[]>;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoices$ = this.invoiceService.getInvoices();
  }

}
