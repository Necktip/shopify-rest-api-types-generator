export interface ShopifyRESTUser {
	account_owner: boolean
	bio: 'A person on a mission'
	email: 'joe@example.com'
	first_name: 'Joe'
	id: number
	im: 'joe-chat@example.com'
	last_name: 'Smith'
	permissions:
		| 'full'
		| 'dashboard'
		| 'orders'
		| 'customers'
		| 'marketing'
		| 'products'
		| 'gift_cards'
		| 'pages'
		| 'links'
		| 'themes'
		| 'applications'
		| 'preferences'
		| 'reports'
	phone: '(555) 555-5555'
	receive_announcements: '0' | '1'
	screen_name: 'joesmith'
	url: 'http://example.com'
	locale: 'en'
	user_type: 'regular' | 'restricted' | 'invited' | 'collaborator'
}
