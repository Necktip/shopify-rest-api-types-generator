export interface ShopifyRESTProductListing {
	product_id: number
	body_html: "It's the small iPod with a big idea: Video."
	created_at: '2008-01-10T11:00:00-05:00'
	handle: 'ipod-nano'
	images: Array<{
		src: 'http://example.com/burton.jpg'
	}>
	options: Array<{
		name: 'Title'
	}>
	product_type: 'Cult Products'
	published_at: '2008-01-10T11:00:00-05:00'
	tags: 'Emotive, Flash Memory, MP3, Music'
	title: 'IPod Nano - 8GB'
	updated_at: '2008-01-10T11:00:00-05:00'
	variants: {
		barcode: '1234_pink'
		compare_at_price: null | unknown
		created_at: '2012-08-24T14:01:47-04:00'
		fulfillment_service: 'manual'
		grams: number
		weight: number
		weight_unit: 'kg'
		id: number
		inventory_management: 'shopify'
		inventory_policy: 'continue'
		inventory_quantity: number
		option1: 'Pink'
		position: number
		price: number
		product_id: number
		requires_shipping: boolean
		sku: 'IPOD2008PINK'
		taxable: boolean
		title: 'Pink'
		updated_at: '2012-08-24T14:01:47-04:00'
	}
	vendor: 'Apple'
}
