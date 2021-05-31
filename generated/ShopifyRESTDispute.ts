import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTDispute {
	id: number
	order_id: number
	type: 'inquiry' | 'chargeback'
	currency: ShopifyRESTCurrencyCode
	amount: '102.53'
	reason:
		| 'bank_not_process'
		| 'credit_not_processed'
		| 'customer_initiated'
		| 'debit_not_authorized'
		| 'duplicate'
		| 'fraudulent'
		| 'general'
		| 'incorrect_account_details'
		| 'insufficient_funds'
		| 'product_not_received'
		| 'product_unacceptable'
		| 'subscription_canceled'
		| 'unrecognized'
	network_reason_code: number
	status: 'needs_response' | 'under_review' | 'charge_refunded' | 'accepted' | 'won' | 'lost'
	evidence_due_by: '2018-01-10T11:00:00-05:00'
	evidence_sent_on: '2018-01-09T11:00:00-05:00' | null
	finalized_on: '2018-03-10T11:00:00-05:00' | null
}
