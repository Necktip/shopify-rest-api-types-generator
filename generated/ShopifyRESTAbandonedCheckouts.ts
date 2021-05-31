import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTAbandonedCheckouts {
	abandoned_checkout_url: 'https://www.snowdevil.ca/orders/14168/68778783ad298f1c80c3bafcddeea?recovered=1'
	billing_address: {
		address1: 'Chestnut Street 92'
		address2: ''
		city: 'Louisville'
		company: null | unknown
		country: 'United States'
		country_code: 'US'
		default: boolean
		first_name: 'Greg'
		id: number
		last_name: 'Piotrowski'
		name: 'Greg Piotrowski'
		phone: '555-625-1199'
		province: 'Kentucky'
		province_code: 'KY'
		zip: '40202'
	}
	buyer_accepts_marketing: boolean
	cart_token: '68778783ad298f1c80c3bafcddeea'
	closed_at: '2008-01-10T11:00:00-05:00' | null
	completed_at: '2008-01-10T11:00:00-05:00' | null
	created_at: '2008-01-10T11:00:00-05:00'
	currency: ShopifyRESTCurrencyCode
	customer: {
		accepts_marketing: boolean
		created_at: '2012-03-13T16:09:55-04:00'
		email: 'bob.norman@hostmail.com'
		first_name: 'Bob'
		id: number
		last_name: 'Norman'
		note: null | unknown
		orders_count: '0'
		state: null | unknown
		total_spent: '0.00'
		updated_at: '2012-03-13T16:09:55-04:00'
		tags: 'tagcity'
	}
	customer_locale: 'fr'
	device_id: number
	discount_codes:
		| 'amount'
		| 'code'
		| 'type'
		| 'percentage'
		| 'shipping'
		| 'fixed_amount'
		| 'fixed_amount'
	email: 'bob.norman@hostmail.com'
	gateway: 'authorize_net' | null
	id: number
	landing_site: 'http://www.example.com?source=abc'
	line_items:
		| 'fulfillment_service'
		| 'fulfillment_status'
		| 'fulfilled'
		| 'null'
		| 'partial'
		| 'grams'
		| 'price'
		| 'product_id'
		| 'quantity'
		| 'requires_shipping'
		| 'sku'
		| 'title'
		| 'variant_id'
		| 'variant_title'
		| 'vendor'
	location_id: number
	note: null | unknown
	phone: '+13125551212'
	presentment_currency: ShopifyRESTCurrencyCode
	referring_site: 'http://www.anexample.com'
	shipping_address: {
		address1: 'Chestnut Street 92'
		address2: 'Apt 2'
		city: 'Louisville'
		company: null | unknown
		country: 'United States'
		first_name: 'Bob'
		last_name: 'Norman'
		latitude: '45.41634'
		longitude: '-75.6868'
		phone: '555-625-1199'
		province: 'Kentucky'
		zip: '40202'
		name: 'Bob Norman'
		country_code: 'US'
		province_code: 'KY'
	}
	shipping_lines: {
		code: 'Free Shipping'
		price: '0.00'
		source: 'shopify'
		title: 'Free Shipping'
	}
	source_name: 'web' | 'pos' | 'iphone' | 'android'
	subtotal_price: '398.00'
	tax_lines: {
		price: '11.94'
		rate: number
		title: 'State Tax'
	}
	taxes_included: boolean
	token: 'b1946ac92492d2347c6235b4d2611184'
	total_discounts: '0.00'
	total_duties: '105.31'
	total_line_items_price: '398.00'
	total_price: '409.94'
	total_tax: '11.94'
	total_weight: number
	updated_at: '2008-01-10T11:00:00-05:00'
	user_id: 1
}
