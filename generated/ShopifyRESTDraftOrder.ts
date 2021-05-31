import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTDraftOrder {
	id: number
	order_id: number
	name: '#1001'
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
	billing_address: {
		address1: '123 Amoebobacterieae St'
		address2: ''
		city: 'Ottawa'
		company: null | unknown
		country: 'US'
		first_name: null | unknown
		id: number
		last_name: null | unknown
		phone: '(555)555-5555'
		province: 'KY'
		zip: '40202'
		name: null | unknown
		province_code: null | unknown
		country_code: null | unknown
		default: boolean
	}
	note: null | unknown
	note_attributes: Array<{
		name: 'custom name'
		value: 'custom value'
	}>
	email: 'bob.norman@example.com'
	currency: ShopifyRESTCurrencyCode
	invoice_sent_at: '2008-01-10T11:00:00-05:00'
	invoice_url: 'https://www.example.com/14376108/checkouts/91a9b3f92d7d42e57268eff5ebd570df'
	line_items: {
		custom: boolean
		fulfillable_quantity: number
		fulfillment_service: 'amazon'
		grams: number
		id: number
		price: '199.99'
		product_id: number
		quantity: number
		requires_shipping: boolean
		sku: 'IPOD-342-N'
		title: 'IPod Nano'
		variant_id: number
		variant_title: 'Pink'
		vendor: 'Apple'
		name: 'IPod Nano - Pink'
		gift_card: boolean
		properties: Array<{
			name: 'custom engraving'
			value: 'Happy Birthday Mom!'
		}>
		taxable: boolean
		tax_lines: Array<{
			title: 'title of tax line'
			rate: '10'
			price: '18'
		}>
		applied_discount: {
			title: 'title of the discount'
			description: 'Description of discount!'
			value: '10'
			value_type: 'percentage'
			amount: '19.99'
		}
	}
	shipping_line: {
		handle: 'shopify-Standard%20Shipping-8.00'
		price: number
		title: 'Free Shipping'
	}
	tags: 'tagsational'
	tax_exempt: boolean
	tax_exemptions:
		| 'EXEMPT_ALL'
		| 'CA_STATUS_CARD_EXEMPTION'
		| 'CA_DIPLOMAT_EXEMPTION'
		| 'CA_BC_RESELLER_EXEMPTION'
		| 'CA_MB_RESELLER_EXEMPTION'
		| 'CA_SK_RESELLER_EXEMPTION'
		| 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION'
		| 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION'
		| 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION'
		| 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION'
		| 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION'
		| 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION'
		| 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION'
		| 'CA_BC_SUB_CONTRACTOR_EXEMPTION'
		| 'CA_SK_SUB_CONTRACTOR_EXEMPTION'
		| 'CA_BC_CONTRACTOR_EXEMPTION'
		| 'CA_SK_CONTRACTOR_EXEMPTION'
		| 'CA_ON_PURCHASE_EXEMPTION'
		| 'CA_MB_FARMER_EXEMPTION'
		| 'CA_NS_FARMER_EXEMPTION'
		| 'CA_SK_FARMER_EXEMPTION'
	tax_lines: Array<{
		price: number
		rate: number
		title: 'State Tax'
	}>
	applied_discount:
		| 'title'
		| 'description'
		| 'value'
		| 'fixed_amount'
		| 'percentage'
		| 'value_type'
		| 'percentage'
		| 'fixed_amount'
		| 'amount'
		| 'value_type'
	taxes_included: boolean
	total_tax: '11.94'
	subtotal_price: number
	total_price: '409.94'
	completed_at: '2008-01-10T11:00:00-05:00'
	created_at: '2008-01-10T11:00:00-05:00'
	updated_at: '2008-01-10T11:00:00-05:00'
	status: 'open' | 'invoice_sent' | 'completed'
}
