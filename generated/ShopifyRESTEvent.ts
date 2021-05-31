export interface ShopifyRESTEvent {
	arguments: 'IPod Nano - 8GB'
	body: null | unknown
	created_at: '2008-01-10T11:00:00-05:00'
	id: number
	description: 'Received a new order'
	path: '/admin/orders/406514653/transactions/#1145'
	message: 'Received new order'
	subject_id: number
	subject_type:
		| 'Article'
		| 'Blog'
		| 'Collection'
		| 'Comment'
		| 'Order'
		| 'Page'
		| 'PriceRule'
		| 'Product'
		| 'ApiPermission'
	verb: 'confirmed'
}
