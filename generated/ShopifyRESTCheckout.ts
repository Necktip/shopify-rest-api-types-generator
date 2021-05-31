import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTCheckout {
	applied_discount:
		| 'amount'
		| 'payment_due'
		| 'title'
		| 'description'
		| 'value'
		| 'value_type'
		| 'fixed_amount'
		| 'percentage'
		| 'non_applicable_reason'
		| 'applicable'
		| 'application_type'
		| 'automatic'
		| 'discount_code'
		| 'manual'
		| 'script'
	billing_address: {
		address1: 'Chestnut Street 92'
		address2: 'Suite 300'
		city: 'Louisville'
		company: null | unknown
		country: 'US'
		first_name: null | unknown
		id: number
		last_name: null | unknown
		phone: '555-625-1199'
		province: 'KY'
		zip: '40202'
		province_code: null | unknown
		country_code: null | unknown
	}
	buyer_accepts_marketing: boolean
	created_at: '2008-01-10T11:00:00-05:00'
	currency: ShopifyRESTCurrencyCode
	customer_id: number
	discount_code: '30_DOLLARS_OFF' | null
	email: 'bob.norman@hostmail.com'
	gift_cards: Array<{
		amount_used: '30.00'
		balance: '70.00'
		id: number
		last_characters: 'abdr'
	}>
	line_items:
		| 'applied_discounts'
		| 'compare_at_price'
		| 'fulfillment_service'
		| 'manual'
		| 'grams'
		| 'id'
		| 'line_price'
		| 'price'
		| 'quantity'
		| 'price'
		| 'product_id'
		| 'properties'
		| 'quantity'
		| 'requires_shipping'
		| 'sku'
		| 'taxable'
		| 'title'
		| 'variant_id'
		| 'variant_title'
		| 'vendor'
	order: {
		id: number
		name: '#0123'
		status_url: 'https://checkout.shopify.com/123/checkouts/4207896aad57dfb159?key=123abc'
	} | null
	payment_due: '99.95'
	payment_url: 'https://elb.deposit.shopifycs.com/sessions'
	phone: '+13125551212'
	presentment_currency: 'JPY'
	requires_shipping: boolean
	reservation_time: null | null
	reservation_time_left: number
	shipping_address: {
		address1: 'Chestnut Street 92'
		address2: 'Apt 2'
		city: 'Louisville'
		company: null | unknown
		country: 'United States'
		first_name: 'Bob'
		last_name: 'Norman'
		phone: '555-625-1199'
		province: 'Kentucky'
		zip: '40202'
		country_code: 'US'
		province_code: 'KY'
	}
	shipping_line: {
		handle: 'shopify-Standard-10.00'
		price: '10.00'
		title: 'Standard'
	}
	shipping_rate: {
		id: 'shopify-Standard-10.00'
		price: '10.00'
		title: 'Standard'
	}
	source_name: 'my_app'
	subtotal_price: '398.00'
	tax_lines: Array<{
		price: '11.94'
		rate: '0.06'
		title: 'State Tax'
	}>
	taxes_included: boolean
	token: 'b1946ac92492d2347c6235b4d2611184'
	total_price: '409.94'
	total_tax: '11.94'
	updated_at: '2008-01-10T11:00:00-05:00'
	user_id: 1234 | null
	web_url: 'https://checkout.shopify.com/112233/checkouts/4207896aad57dfb159?key=123abc'
}
