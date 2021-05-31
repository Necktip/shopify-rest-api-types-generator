import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTProductVariant {
	barcode: '1234_pink'
	compare_at_price: '299.00'
	created_at: '2008-01-10T11:00:00-05:00'
	fulfillment_service: 'manual'
	grams: number
	id: number
	image_id: number
	inventory_item_id: number
	inventory_management: 'shopify' | 'null' | 'fulfillment_service'
	inventory_policy: 'deny' | 'continue'
	inventory_quantity: number
	old_inventory_quantity: number
	inventory_quantity_adjustment: number
	option1: 'Pink'
	presentment_prices: Array<
		| {
				price: {
					currency_code: ShopifyRESTCurrencyCode
					amount: '199.99'
				}
				compare_at_price: {
					currency_code: ShopifyRESTCurrencyCode
					amount: '249.99'
				}
		  }
		| {
				price: {
					currency_code: ShopifyRESTCurrencyCode
					amount: '158.95'
				}
				compare_at_price: {
					currency_code: ShopifyRESTCurrencyCode
					amount: '198.95'
				}
		  }
		| {
				price: {
					currency_code: 'GBP'
					amount: '143.00'
				}
				compare_at_price: {
					currency_code: 'GBP'
					amount: '179.00'
				}
		  }
		| {
				price: {
					currency_code: 'JPY'
					amount: '22400'
				}
				compare_at_price: {
					currency_code: 'JPY'
					amount: '28000'
				}
		  }
	>
	position: number
	price: '199.00'
	product_id: number
	requires_shipping: boolean
	sku: 'IPOD2008PINK'
	taxable: boolean
	tax_code: 'DA040000'
	title: 'Pink'
	updated_at: '2008-01-10T11:00:00-05:00'
	weight: number
	weight_unit: 'weight_unit' | 'g' | 'kg' | 'oz' | 'lb'
}
