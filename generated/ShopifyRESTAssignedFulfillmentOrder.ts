export interface ShopifyRESTAssignedFulfillmentOrder {
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
	id: number
	line_items: Array<{
		id: number
		shop_id: number
		fulfillment_order_id: number
		line_item_id: number
		inventory_item_id: number
		quantity: number
		fulfillable_quantity: number
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
	status: 'open' | 'in_progress' | 'cancelled' | 'incomplete' | 'closed'
}
