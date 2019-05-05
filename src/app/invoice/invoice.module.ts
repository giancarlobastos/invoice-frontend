import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';

@NgModule({
  declarations: [InvoiceListComponent, InvoiceViewComponent, InvoiceFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InvoiceFormComponent,
    InvoiceViewComponent,
    InvoiceListComponent
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModule { }
