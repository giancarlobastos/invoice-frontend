import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Invoice } from './invoice';

@Injectable()
export class InvoiceService {

  private readonly API = `${environment.API}/invoices`;

  private readonly httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createInvoice(invoice) {
    return this.http.post(this.API, invoice, this.httpOptions).subscribe(response => console.log(response));
  }

  getInvoices() {
    return this.http.get<Invoice[]>(this.API).pipe(
      tap(console.log)
    );
  }

}
