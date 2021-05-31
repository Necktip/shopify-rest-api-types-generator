import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTTransaction {
	amount: '10.00'
	authorization: 'ch_1AtJu6CktlpKSclI4zjeQb2t'
	authorization_expires_at: '2008-01-10T11:00:00-05:00'
	created_at: '2008-01-10T11:00:00-05:00'
	currency: ShopifyRESTCurrencyCode
	device_id: number
	error_code:
		| 'incorrect_number'
		| 'invalid_number'
		| 'invalid_expiry_date'
		| 'invalid_cvc'
		| 'expired_card'
		| 'incorrect_cvc'
		| 'incorrect_zip'
		| 'incorrect_address'
		| 'card_declined'
		| 'processing_error'
		| 'call_issuer'
		| 'pick_up_card'
	extended_authorization_attributes: {
		standard_authorization_expires_at: '2020-10-08T00:00:00-04:00'
		extended_authorization_expires_at: '2020-10-30T00:00:00-04:00'
	}
	gateway: 'shopify_payments'
	id: number
	kind: 'authorization' | 'capture' | 'sale' | 'void' | 'refund'
	location_id: number
	message: 'Marked the Cash on Delivery (COD) payment as received'
	order_id: number
	payment_details: {
		credit_card_bin: '123456'
		avs_result_code: 'Y'
		cvv_result_code: 'M'
		credit_card_number: '•••• •••• •••• 4242'
		credit_card_company: 'Visa'
	}
	parent_id: number
	processed_at: '2008-01-10T11:00:00-05:00'
	receipt: Record<string, unknown>
	source_name: 'web'
	status: 'pending' | 'failure' | 'success' | 'error'
	test: boolean
	user_id: number
	currency_exchange_adjustment: {
		id: number
		adjustment: '-0.01'
		original_amount: '-53.62'
		final_amount: '-53.63'
		currency: ShopifyRESTCurrencyCode
	}
}
