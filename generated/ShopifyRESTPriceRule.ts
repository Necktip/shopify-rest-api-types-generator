export interface ShopifyRESTPriceRule {
	allocation_method: 'each' | 'across'
	created_at: '2008-01-10T11:00:00-05:00'
	updated_at: '2008-01-10T11:00:00-05:00'
	customer_selection:
		| 'all'
		| 'prerequisite'
		| 'prerequisite_saved_search_ids'
		| 'prerequisite_customer_ids'
	ends_at: '2008-01-10T11:00:00-05:00'
	entitled_collection_ids: Array<number>
	' entitled_country_ids': Array<number>
	entitled_product_ids: Array<number>
	entitled_variant_ids: Array<number>
	id: number
	once_per_customer: boolean
	prerequisite_customer_ids: Array<number>
	prerequisite_quantity_range: {
		greater_than_or_equal_to: number
	}
	prerequisite_saved_search_ids: Array<number>
	prerequisite_shipping_price_range: {
		less_than_or_equal_to: '10.0'
	}
	prerequisite_subtotal_range: {
		greater_than_or_equal_to: '40.0'
	}
	prerequisite_to_entitlement_purchase: {
		prerequisite_amount: '80.00'
	}
	starts_at: '2008-01-10T11:00:00-05:00'
	target_selection: 'all' | 'entitled'
	target_type: 'line_item' | 'shipping_line'
	title: 'SUMMERSALE10OFF'
	usage_limit: number
	prerequisite_product_ids: Array<number>
	prerequisite_variant_ids: Array<number>
	prerequisite_collection_ids: Array<number>
	value: -35
	value_type: 'fixed_amount' | 'value' | 'value' | 'percentage' | 'value' | 'value'
	prerequisite_to_entitlement_quantity_ratio: {
		prerequisite_quantity: number
		entitled_quantity: number
	}
	allocation_limit: 3 | null
}
