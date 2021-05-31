import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTTransactions {
	id: number
	type: 'charge'
	test: boolean
	payout_id: number
	payout_status: 'scheduled'
	currency: ShopifyRESTCurrencyCode
	amount: '102.53'
	fee: '3.07'
	net: '102.53'
	source_id: number
	source_type: 'charge'
	source_order_transaction_id: number
	source_order_id: number
	processed_at: '2008-01-10T11:00:00-05:00'
}
