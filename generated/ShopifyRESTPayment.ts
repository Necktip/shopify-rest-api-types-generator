import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTPayment {
	credit_card: {
		first_name: 'Bob'
		last_name: 'Norman'
		first_digits: '424242'
		last_digits: '4242'
		brand: 'visa'
		expiry_month: number
		expiry_year: number
	}
	id: number
	payment_processing_error_message: 'Card was declined'
	next_action: {
		redirect_url: 'https://shop-domain-url.myshopify.com/:shop_id/checkouts/:token/authentications/:auth_token/3ds'
	}
	transaction: {
		amount: '323.17'
		amount_in: null | unknown
		amount_out: null | unknown
		amount_rounding: null | unknown
		authorization: 'ch_1CfBrOCNqnO8CNQxAtf5k9iX'
		created_at: '2018-06-20T15:20:53-04:00'
		currency: ShopifyRESTCurrencyCode
		error_code: null | unknown
		gateway: 'shopify_payments'
		id: number
		kind: 'sale'
		message: 'Transaction approved'
		status: 'success'
		test: boolean
	}
	unique_token: 'client-side-idempotency-token'
}
