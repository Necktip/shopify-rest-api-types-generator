export interface ShopifyRESTCustomer {
	accepts_marketing: boolean
	accepts_marketing_updated_at: '2008-01-10T11:00:00-05:00'
	addresses: Array<{
		id: number
		customer_id: number
		first_name: 'Bob'
		last_name: 'Norman'
		company: null | unknown
		address1: 'Chestnut Street 92'
		address2: 'Apartment 2'
		city: 'Louisville'
		province: 'Kentucky'
		country: 'United States'
		zip: '40202'
		phone: '555-625-1199'
		province_code: 'KY'
		country_code: 'US'
		country_name: 'United States'
		default: boolean
	}>
	currency: 'JPY'
	created_at: '2008-01-10T11:00:00-05:00'
	default_address: {
		address1: 'Chestnut Street 92'
		address2: 'Apartment 2'
		city: 'Louisville'
		company: null | unknown
		country: 'united states'
		first_name: 'Bob'
		id: number
		last_name: 'Norman'
		phone: '555-625-1199'
		province: 'Kentucky'
		zip: '40202'
		province_code: 'KY'
		country_code: 'US'
		country_name: 'United States'
		default: boolean
	}
	email: 'bob.norman@hostmail.com'
	first_name: 'John'
	id: number
	last_name: 'Norman'
	last_order_id: number
	last_order_name: '#1169'
	metafield: 'key' | 'namespace' | 'value' | 'value_type' | 'string' | 'integer' | 'description'
	marketing_opt_in_level: 'single_opt_in' | 'confirmed_opt_in' | 'unknown' | null
	multipass_identifier: null | unknown
	note: 'Placed an order that had a fraud warning'
	orders_count: number
	phone: '+16135551111'
	state: 'disabled' | 'invited' | 'enabled' | 'declined'
	tags: 'loyal'
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
	total_spent: '375.30'
	updated_at: '2008-01-10T11:00:00-05:00'
	verified_email: true
}
