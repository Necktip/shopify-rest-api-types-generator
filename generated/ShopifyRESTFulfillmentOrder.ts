export interface ShopifyRESTFulfillmentOrder {
	assigned_location_id: number
	destination: {
		id: number
		address1: '123 Amoebobacterieae St'
		address2: 'Unit 806'
		city: 'Ottawa'
		company: ''
		country: 'Canada'
		email: 'bob@customer.com'
		first_name: 'Bob'
		last_name: 'Bobsen'
		phone: '(555)555-5555'
		province: 'Ontario'
		zip: 'K2P0V6'
	}
	delivery_method: 'id' | 'method_type' | 'local' | 'none' | 'pick_up' | 'retail' | 'shipping'
	fulfill_at: '2008-01-10T11:00:00-05:00'
	id: number
	line_items: Array<{
		id: number
		shop_id: number
		fulfillment_order_id: number
		line_item_id: number
		inventory_item_id: number
		quantity: number
		fulfillable_quantity: number
		variant_id: number
	}>
	order_id: number
	request_status:
		| 'unsubmitted'
		| 'submitted'
		| 'accepted'
		| 'rejected'
		| 'cancellation_requested'
		| 'cancellation_accepted'
		| 'cancellation_rejected'
		| 'closed'
	shop_id: number
	status:
		| 'open'
		| 'in_progress'
		| 'scheduled'
		| 'fulfill_at'
		| 'cancelled'
		| 'incomplete'
		| 'closed'
	supported_actions: Array<
		| 'create_fulfillment'
		| 'request_fulfillment'
		| 'cancel_fulfillment_order'
		| 'request_cancellation'
	>
	merchant_requests: 'message' | 'request_options' | 'kind'
	assigned_location: {
		address1: '123 Amoebobacterieae St'
		address2: 'Unit 806'
		city: 'Ottawa'
		country_code: 'CA'
		location_id: number
		name: 'Bob Bobsen'
		phone: '(555)555-5555'
		province: 'Ontario'
		zip: 'K2P0V6'
	}
}
