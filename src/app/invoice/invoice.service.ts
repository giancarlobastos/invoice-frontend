import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Invoice } from './invoice';

@Injectable()
export class InvoiceService {

  private readonly API = `${environment.API}/invoices`;

  invoiceEmitter: EventEmitter<Invoice>;
  selectedInvoiceEmitter: EventEmitter<Invoice>;

  private readonly httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { 
    this.invoiceEmitter = new EventEmitter<Invoice>();
    this.selectedInvoiceEmitter = new EventEmitter<Invoice>();
  }

  createInvoice(invoice) {
    return this.http.post(this.API, invoice, this.httpOptions).subscribe(response => this.invoiceEmitter.emit(response as Invoice));
  }

  getInvoices() {
    return this.http.get<Invoice[]>(this.API).pipe(
      tap(console.log)
    );
  }

  selectInvoice(invoice: Invoice) {
    this.selectedInvoiceEmitter.emit(invoice);
  }
}
