export interface Invoice {
    
    invoiceNumber: Number;

    invoicePaymentAddress: string;

    from: string;

    to: string;

    description: string;

    dueDate: Date;

    totalAmount: Number;

    totalAmountPaid: Number;

    totalBalance: Number;

    status: string;
}