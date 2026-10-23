export type Currency = 'USD' | 'AED' | 'SAR' | 'PKR';

export type OrderStatus =
  | 'DRAFT'
  | 'PENDING_PAYMENT'
  | 'PAID'
  | 'PROCESSING'
  | 'WAITING_PROVIDER'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'REFUNDED'
  | 'FAILED'
  | 'NEED_DOCUMENTS'
  | 'NEED_REVIEW';

export type BookingType = 'FLIGHT' | 'HOTEL' | 'VISA' | 'INSURANCE' | 'TOUR' | 'TRANSPORT';

export interface CustomerProfile {
  id: string;
  fullName: string;
  email?: string;
  phone?: string;
}

export interface OrderSummary {
  id: string;
  customerId: string;
  orderNumber: string;
  status: OrderStatus;
  total: number;
  currency: Currency;
}
