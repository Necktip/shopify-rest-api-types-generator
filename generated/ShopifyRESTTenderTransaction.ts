import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTTenderTransaction {
	id: number
	order_id: number
	amount: '10.00'
	currency: ShopifyRESTCurrencyCode
	user_id: number
	test: boolean
	processed_at: '2008-01-10T11:00:00-05:00'
	remote_reference: 'ch_1AtJu6CktlpKSclI4zjeQb2t'
	payment_details: {
		credit_card_number: '•••• •••• •••• 4242'
		credit_card_company: 'Visa'
	}
	payment_method:
		| 'credit_card'
		| 'cash'
		| 'android_pay'
		| 'apple_pay'
		| 'google_pay'
		| 'samsung_pay'
		| 'shopify_pay'
		| 'amazon'
		| 'klarna'
		| 'paypal'
		| 'unknown'
		| 'other'
}
