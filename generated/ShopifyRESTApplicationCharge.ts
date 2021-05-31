export interface ShopifyRESTApplicationCharge {
	confirmation_url: 'https://apple.myshopify.com/admin/charges/confirm_application_charge?id=1012637313&amp;signature=BAhpBIGeWzw%3D--17779c1efb4688e9cfa653a3245f923b4f1eb140'
	created_at: '2008-01-10T11:00:00-05:00'
	id: number
	name: 'Super Duper Expensive action'
	price: '100.00'
	return_url: 'http://super-duper.shopifyapps.com'
	status:
		| 'pending'
		| 'accepted'
		| 'Removed in version 2021-01'
		| 'pending'
		| 'active'
		| 'active'
		| 'declined'
		| 'expired'
	test: 'true' | 'null' | null
	updated_at: '2008-01-10T11:00:00-05:00'
}
