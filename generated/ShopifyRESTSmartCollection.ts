export interface ShopifyRESTSmartCollection {
	body_html: '<p>The best selling ipod ever</p>'
	handle: 'smart-ipods'
	id: number
	image: 'attachment' | 'src' | 'alt'
	published_at: '2008-01-10T11:00:00-05:00' | null
	published_scope: 'web' | 'global'
	rules: {
		column: 'variant_price'
		relation: 'less_than'
		condition: '20'
	}
	disjunctive: 'true' | 'false'
	sort_order:
		| 'alpha-asc'
		| 'alpha-des'
		| 'best-selling'
		| 'created'
		| 'created-desc'
		| 'manual'
		| 'price-asc'
		| 'price-desc'
	template_suffix: null | unknown
	title: 'Smart iPods'
	updated_at: '2008-01-10T11:00:00-05:00'
}
