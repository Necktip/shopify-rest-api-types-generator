export interface ShopifyRESTCollection {
	body_html: '<p>The best selling iPods ever</p>'
	handle: 'ipods'
	image: {
		src: 'http://static.shopify.com/collections/ipod.jpg?0'
		alt: 'iPods'
		width: number
		height: number
		created_at: '2018-04-19T09:34:47-04:00'
	}
	id: number
	published_at: '2008-01-10T11:00:00-05:00' | null
	published_scope: 'web' | 'global'
	sort_order:
		| 'alpha-asc'
		| 'alpha-desc'
		| 'best-selling'
		| 'created'
		| 'created-desc'
		| 'manual'
		| 'price-asc'
		| 'price-desc'
	template_suffix: 'custom' | null
	title: 'IPods'
	updated_at: '2008-01-10T11:00:00-05:00'
}
