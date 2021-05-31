import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTOrder {
	app_id: number
	billing_address: {
		address1: '2259 Park Ct'
		address2: 'Apartment 5'
		city: 'Drayton Valley'
		company: null | unknown
		country: 'Canada'
		first_name: 'Christopher'
		last_name: 'Gorski'
		phone: '(555)555-5555'
		province: 'Alberta'
		zip: 'T0E 0M0'
		name: 'Christopher Gorski'
		province_code: 'AB'
		country_code: 'CA'
		latitude: '45.41634'
		longitude: '-75.6868'
	}
	browser_ip: '216.191.105.146'
	buyer_accepts_marketing: boolean
	cancel_reason: 'customer' | 'fraud' | 'inventory' | 'declined' | 'other'
	cancelled_at: '2008-01-10T11:00:00-05:00'
	cart_token: '68778783ad298f1c80c3bafcddeea'
	checkout_token: 'bd5a8aa1ecd019dd3520ff791ee3a24c'
	client_details: {
		accept_language: 'en-US,en;q=0.9'
		browser_height: number
		browser_ip: '216.191.105.146'
		browser_width: number
		session_hash: '9ad4d1f4e6a8977b9dd98eed1e477643'
		user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
	}
	closed_at: '2008-01-10T11:00:00-05:00'
	created_at: '2008-01-10T11:00:00-05:00'
	currency: ShopifyRESTCurrencyCode
	current_total_discounts: '10.00'
	current_total_discounts_set: {
		shop_money: {
			amount: '10.00'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '5.00'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	current_total_duties_set: {
		shop_money: {
			amount: '164.86'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '105.31'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	current_total_price: '10.00'
	current_total_price_set: {
		shop_money: {
			amount: '30.00'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '20.00'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	current_subtotal_price: '10.00'
	current_subtotal_price_set: {
		shop_money: {
			amount: '30.00'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '20.00'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	current_total_tax: '10.00'
	current_total_tax_set: {
		shop_money: {
			amount: '30.00'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '20.00'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	customer: {
		id: number
		email: 'bob.norman@hostmail.com'
		accepts_marketing: boolean
		created_at: '2012-03-13T16:09:55-04:00'
		updated_at: '2012-03-13T16:09:55-04:00'
		first_name: 'Bob'
		last_name: 'Norman'
		orders_count: '1'
		state: 'disabled'
		total_spent: '0.00'
		last_order_id: number
		note: null | unknown
		verified_email: boolean
		multipass_identifier: null | unknown
		tax_exempt: boolean
		tax_exemptions: Record<string, unknown>
		phone: '+13125551212'
		tags: 'loyal'
		last_order_name: '#1001'
		currency: ShopifyRESTCurrencyCode
		addresses: Record<string, unknown>
		admin_graphql_api_id: 'gid://shopify/Customer/207119551'
		default_address: Record<string, unknown>
	} | null
	customer_locale: 'en-CA'
	discount_applications:
		| 'allocation_method'
		| 'across'
		| 'each'
		| 'one'
		| 'across'
		| 'one'
		| 'code'
		| 'description'
		| 'target_selection'
		| 'target_type'
		| 'all'
		| 'entitled'
		| 'explicit'
		| 'target_type'
		| 'line_item'
		| 'shipping_line'
		| 'title'
		| 'type'
		| 'automatic'
		| 'discount_code'
		| 'manual'
		| 'script'
		| 'value'
		| '20.0'
		| '15.0'
		| 'value_type'
		| 'fixed_amount'
		| 'percentage'
	discount_codes:
		| 'amount'
		| 'code'
		| 'code'
		| 'type'
		| 'fixed_amount'
		| 'fixed_amount'
		| 'amount'
		| 'amount'
		| 'percentage'
		| 'amount'
		| 'shipping'
		| 'amount'
		| 'amount'
	email: 'bob.norman@hostmail.com'
	financial_status:
		| 'pending'
		| 'authorized'
		| 'partially_paid'
		| 'paid'
		| 'partially_refunded'
		| 'refunded'
		| 'voided'
	fulfillments: Array<{
		created_at: '2012-03-13T16:09:54-04:00'
		id: number
		order_id: number
		status: 'failure'
		tracking_company: 'USPS'
		tracking_number: '1Z2345'
		updated_at: '2012-05-01T14:22:25-04:00'
	}>
	fulfillment_status: 'fulfilled' | 'null' | 'partial' | 'restocked'
	gateway: 'shopify_payments'
	id: number
	landing_site: 'http://www.example.com?source=abc'
	line_items:
		| 'fulfillable_quantity'
		| 'quantity - max(refunded_quantity, fulfilled_quantity) - pending_fulfilled_quantity - open_fulfilled_quantity'
		| 'fulfillment_service'
		| 'manual'
		| 'amazon'
		| 'shipwire'
		| 'fulfillment_status'
		| 'null'
		| 'fulfilled'
		| 'partial'
		| 'not_eligible'
		| 'grams'
		| 'id'
		| 'price'
		| 'price_set'
		| 'product_id'
		| 'null'
		| 'quantity'
		| 'requires_shipping'
		| 'sku'
		| 'title'
		| 'variant_id'
		| 'variant_title'
		| 'vendor'
		| 'name'
		| 'gift_card'
		| 'true'
		| 'properties'
		| 'taxable'
		| 'tax_lines'
		| 'title'
		| 'price'
		| 'price_set'
		| 'rate'
		| 'tip_payment_gateway'
		| 'shopify_payments'
		| 'tip_payment_method'
		| 'Visa'
		| 'total_discount'
		| 'discount_allocations'
		| 'total_discount_set'
		| 'discount_allocations'
		| 'discount_allocations'
		| 'amount'
		| 'discount_application_index'
		| 'discount_applications'
		| 'amount_set'
		| 'origin_location'
		| 'id'
		| 'country_code'
		| 'province_code'
		| 'name'
		| 'address1'
		| 'address2'
		| 'city'
		| 'zip'
		| 'duties'
	location_id: 49202758 | null
	name: '#1001'
	note: 'Customer changed their mind.'
	note_attributes: Array<{
		name: 'custom name'
		value: 'custom value'
	}>
	number: number
	order_number: number
	original_total_duties_set: {
		shop_money: {
			amount: '164.86'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '105.31'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	payment_details: {
		avs_result_code: 'Y'
		credit_card_bin: '453600'
		cvv_result_code: 'M'
		credit_card_number: '•••• •••• •••• 4242'
		credit_card_company: 'Visa'
	}
	payment_gateway_names: Array<'authorize_net' | 'Cash on Delivery (COD)'>
	phone: '+557734881234'
	presentment_currency: ShopifyRESTCurrencyCode
	processed_at: '2008-01-10T11:00:00-05:00'
	processing_method: 'direct'
	referring_site: 'http://www.anexample.com'
	refunds: Array<{
		id: number
		order_id: number
		created_at: '2018-03-06T09:35:37-05:00'
		note: null | unknown
		user_id: null | unknown
		processed_at: '2018-03-06T09:35:37-05:00'
		refund_line_items: Array<unknown>
		transactions: Array<unknown>
		order_adjustments: Array<unknown>
	}>
	shipping_address: {
		address1: '123 Amoebobacterieae St'
		address2: ''
		city: 'Ottawa'
		company: null | unknown
		country: 'Canada'
		first_name: 'Bob'
		last_name: 'Bobsen'
		latitude: '45.41634'
		longitude: '-75.6868'
		phone: '555-625-1199'
		province: 'Ontario'
		zip: 'K2P0V6'
		name: 'Bob Bobsen'
		country_code: 'CA'
		province_code: 'ON'
	}
	shipping_lines: Array<{
		code: 'INT.TP'
		price: '4.00'
		price_set: {
			shop_money: {
				amount: '4.00'
				currency_code: ShopifyRESTCurrencyCode
			}
			presentment_money: {
				amount: '3.17'
				currency_code: ShopifyRESTCurrencyCode
			}
		}
		discounted_price: '4.00'
		discounted_price_set: {
			shop_money: {
				amount: '4.00'
				currency_code: ShopifyRESTCurrencyCode
			}
			presentment_money: {
				amount: '3.17'
				currency_code: ShopifyRESTCurrencyCode
			}
		}
		source: 'canada_post'
		title: 'Small Packet International Air'
		tax_lines: Array<unknown>
		carrier_identifier: 'third_party_carrier_identifier'
		requested_fulfillment_service_id: 'third_party_fulfillment_service_id'
	}>
	source_name: 'web'
	subtotal_price: number
	subtotal_price_set: {
		shop_money: {
			amount: '141.99'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '90.95'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	tags: 'imported'
	tax_lines: Array<{
		price: number
		rate: number
		title: 'State Tax'
	}>
	taxes_included: boolean
	test: boolean
	token: 'b1946ac92492d2347c6235b4d2611184'
	total_discounts: '0.00'
	total_discounts_set: {
		shop_money: {
			amount: '0.00'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '0.00'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	total_line_items_price: '398.00'
	total_line_items_price_set: {
		shop_money: {
			amount: '141.99'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '90.95'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	total_outstanding: '5.00'
	total_price: '409.94'
	total_price_set: {
		shop_money: {
			amount: '164.86'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '105.31'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	total_shipping_price_set: {
		shop_money: {
			amount: '30.00'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '0.00'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	total_tax: '11.94'
	total_tax_set: {
		shop_money: {
			amount: '18.87'
			currency_code: ShopifyRESTCurrencyCode
		}
		presentment_money: {
			amount: '11.82'
			currency_code: ShopifyRESTCurrencyCode
		}
	}
	total_tip_received: '4.87'
	total_weight: number
	updated_at: '2008-01-10T11:00:00-05:00'
	user_id: number
	order_status_url: 'https://checkout.shopify.com/112233/checkouts/4207896aad57dfb159/thank_you_token?key=753621327b9e8a64789651bf221dfe35'
}
