import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.invoiceService.createInvoice(JSON.stringify(form.form.value));
    form.reset();
  }

}
