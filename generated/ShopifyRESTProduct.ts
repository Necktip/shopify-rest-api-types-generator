import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTProduct {
	body_html: "It's the small iPod with a big idea: Video."
	created_at: '2008-01-10T11:00:00-05:00'
	handle: 'ipod-nano'
	id: number
	images: Array<{
		id: number
		product_id: number
		position: number
		created_at: '2018-01-08T12:34:47-05:00'
		updated_at: '2018-01-08T12:34:47-05:00'
		width: number
		height: number
		src: 'http://example.com/burton.jpg'
		variant_ids: Array<Record<string, unknown>>
	}>
	options: Array<{
		name: 'Title'
	}>
	product_type: 'Cult Products'
	published_at: '2008-01-10T11:00:00-05:00' | null
	published_scope: 'web' | 'global'
	status: 'active' | 'archived' | 'draft'
	tags: 'Emotive, Flash Memory, MP3, Music'
	template_suffix: 'special' | null
	title: 'IPod Nano - 8GB'
	updated_at: '2008-01-10T11:00:00-05:00'
	variants: Array<{
		barcode: '1234_pink'
		compare_at_price: null | unknown
		created_at: '2012-08-24T14:01:47-04:00'
		fulfillment_service: 'manual'
		grams: number
		weight: number
		weight_unit: 'kg'
		id: number
		inventory_item_id: number
		inventory_management: 'shopify'
		inventory_policy: 'continue'
		inventory_quantity: number
		option1: 'Pink'
		position: number
		price: number
		presentment_prices: Array<
			| {
					price: {
						currency_code: ShopifyRESTCurrencyCode
						amount: '199.99'
					}
					compare_at_price: null | unknown
			  }
			| {
					price: {
						currency_code: ShopifyRESTCurrencyCode
						amount: '158.95'
					}
					compare_at_price: null | unknown
			  }
			| {
					price: {
						currency_code: 'GBP'
						amount: '143.00'
					}
					compare_at_price: null | unknown
			  }
			| {
					price: {
						currency_code: 'JPY'
						amount: '22400'
					}
					compare_at_price: null | unknown
			  }
		>
		product_id: number
		requires_shipping: boolean
		sku: 'IPOD2008PINK'
		taxable: boolean
		title: 'Pink'
		updated_at: '2012-08-24T14:01:47-04:00'
	}>
	vendor: 'Apple'
}
