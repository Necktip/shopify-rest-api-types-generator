export interface ShopifyRESTFulfillmentEvent {
	address1: '3575 Boul. Saint-Laurent'
	city: 'Montreal'
	country: 'Canada'
	created_at: '2008-01-10T11:00:00-05:00'
	estimated_delivery_at: '2008-01-10T11:00:00-05:00' | null
	fulfillment_id: number
	happened_at: '2008-01-10T11:00:00-05:00'
	id: number
	latitude: number
	longitude: number
	message: 'IN_TRANSIT'
	order_id: number
	province: 'QC'
	shop_id: number
	status:
		| 'label_printed'
		| 'label_purchased'
		| 'attempted_delivery'
		| 'ready_for_pickup'
		| 'picked_up'
		| 'confirmed'
		| 'in_transit'
		| 'out_for_delivery'
		| 'delivered'
		| 'failure'
	updated_at: '2008-01-10T11:00:00-05:00'
	zip: 'H2X 2R7'
}
