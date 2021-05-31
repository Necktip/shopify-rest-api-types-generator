export interface ShopifyRESTFulfillmentService {
	callback_url: 'http://myapp.com'
	format: 'json'
	fulfillment_orders_opt_in: boolean
	handle: 'my-fulfillment-service'
	inventory_management: boolean
	location_id: number
	name: 'My Fulfillment Service'
	provider_id: null | unknown
	requires_shipping_method: boolean
	tracking_support: true
}
