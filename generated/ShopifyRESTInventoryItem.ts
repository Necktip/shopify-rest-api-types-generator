export interface ShopifyRESTInventoryItem {
	cost: '25.00'
	country_code_of_origin: 'FR'
	country_harmonized_system_codes: Array<
		| {
				harmonized_system_code: '1234561111'
				country_code: 'CA'
		  }
		| {
				harmonized_system_code: '1234562222'
				country_code: 'US'
		  }
	>
	created_at: '2008-01-10T11:00:00-05:00'
	harmonized_system_code: number
	id: number
	province_code_of_origin: 'QC'
	sku: 'IPOD2008PINK'
	tracked: boolean
	updated_at: '2008-01-10T11:00:00-05:00'
	requires_shipping: true
}
