export interface ShopifyRESTShippingZone {
	id: number
	name: 'North America'
	profile_id: number
	location_group_id: number
	countries: {
		id: number
		shipping_zone_id: number
		name: 'Canada'
		tax: number
		code: 'CA'
		tax_name: 'GST'
		provinces: Array<unknown>
	}
	provinces: {
		code: 'AB'
		country_id: number
		shipping_zone_is: number
		id: number
		name: 'Alberta'
		tax: number
		tax_name: null | unknown
		tax_type: null | unknown
		tax_percentage: number
	}
	carrier_shipping_rate_providers: Array<unknown>
	price_based_shipping_rates: {
		id: number
		name: '$5 Shipping'
		price: '5.00'
		shipping_zone_id: number
		min_order_subtotal: '40.0'
		max_order_subtotal: null | unknown
	}
	weight_based_shipping_rates: {
		id: number
		name: 'Canada Air Shipping'
		price: '25.00'
		shipping_zone_id: number
		weight_low: number
		weight_high: number
	}
}
