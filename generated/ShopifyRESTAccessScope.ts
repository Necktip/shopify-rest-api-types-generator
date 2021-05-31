export interface ShopifyRESTAccessScope {
	access_scopes: Array<
		| {
				handle: 'write_product_listings'
		  }
		| {
				handle: 'read_shipping'
		  }
	>
}
