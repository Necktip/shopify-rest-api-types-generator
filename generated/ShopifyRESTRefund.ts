import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTRefund {
	created_at: '2008-01-10T11:00:00-05:00'
	duties: Array<{
		duty_id: number
		amount_set: {
			shop_money: {
				amount: '9.83'
				currency_code: ShopifyRESTCurrencyCode
			}
			presentment_money: {
				amount: '9.83'
				currency_code: ShopifyRESTCurrencyCode
			}
		}
	}>
	id: number
	note: 'Item was damaged during shipping'
	order_adjustments:
		| 'id'
		| 'order_id'
		| 'refund_id'
		| 'amount'
		| 'kind'
		| 'shipping_refund'
		| 'amount'
		| 'tax_amount'
		| 'amount'
		| 'kind'
		| 'shipping_refund'
		| 'refund_discrepancy'
		| 'reason'
		| 'discrepancy_reason'
		| 'amount_set'
		| 'tax_amount_set'
	processed_at: '2008-01-10T11:00:00-05:00'
	refund_duties: 'duty_id' | 'refund_type' | 'FULL' | 'PROPORTIONAL'
	refund_line_items:
		| 'id'
		| 'line_item'
		| 'line_item_id'
		| 'quantity'
		| 'restock_type'
		| 'no_restock'
		| 'cancel'
		| 'return'
		| 'legacy_restock'
		| 'restock'
		| 'location_id'
		| 'restock_type'
		| 'return'
		| 'cancel'
		| 'subtotal'
		| 'total_tax'
		| 'subtotal_set'
		| 'total_tax_set'
	restock: boolean
	transactions: Array<{
		id: number
		order_id: number
		amount: '209.00'
		kind: 'refund'
		gateway: 'shopify_payments'
		status: 'success'
		message: null | unknown
		created_at: '2005-08-05T12:59:12-04:00'
		test: boolean
		authorization: 'authorization-key'
		currency: ShopifyRESTCurrencyCode
		location_id: null | unknown
		user_id: null | unknown
		parent_id: number
		device_id: null | unknown
		receipt: Record<string, unknown>
		error_code: null | unknown
		source_name: 'web'
	}>
	user_id: 238478920
}
