export interface ShopifyRESTFulfillment {
	created_at: '2008-01-10T11:00:00-05:00'
	id: number
	line_items:
		| 'id'
		| 'variant_id'
		| 'title'
		| 'quantity'
		| 'price'
		| 'grams'
		| 'sku'
		| 'variant_title'
		| 'vendor'
		| 'fulfillment_service'
		| 'product_id'
		| 'requires_shipping'
		| 'taxable'
		| 'gift_card'
		| 'name'
		| 'variant_inventory_management'
		| 'properties'
		| 'product_exists'
		| 'fulfillable_quantity'
		| 'total_discount'
		| 'fulfillment_status'
		| 'fulfilled'
		| 'null'
		| 'partial'
		| 'tax_lines'
		| 'title'
		| 'price'
		| 'rate'
		| 'duties'
	location_id: number
	name: '#1001.1'
	notify_customer: boolean
	order_id: number
	receipt: {
		testcase: boolean
		authorization: '123456'
	}
	service: 'manual'
	shipment_status:
		| 'label_printed'
		| 'label_purchased'
		| 'attempted_delivery'
		| 'ready_for_pickup'
		| 'confirmed'
		| 'in_transit'
		| 'out_for_delivery'
		| 'delivered'
		| 'failure'
	status: 'pending' | 'open' | 'success' | 'cancelled' | 'error' | 'failure'
	tracking_company: 'China Post'
	tracking_numbers: Array<'112345Z2345'>
	tracking_urls: Array<'http://track-chinapost.com/startairmail.php?code=112345Z2345'>
	updated_at: '2008-01-10T11:00:00-05:00'
	variant_inventory_management: 'shopify'
}
