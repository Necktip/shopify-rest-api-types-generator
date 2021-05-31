export interface ShopifyRESTRecurringApplicationCharge {
	activated_on: null | null
	billing_on: null | null
	cancelled_on: null | null
	capped_amount: '100'
	confirmation_url: 'https://apple.myshopify.com/admin/charges/confirm_recurring_application_charge?id=654381177&amp;signature=BAhpBHkQASc%3D--374c02da2ea0371b23f40781b8a6d5f4a520e77b'
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
		| 'pending'
		| 'active'
		| 'declined'
		| 'expired'
		| 'frozen'
		| 'cancelled'
	terms: '$1 for 1000 emails'
	test: 'true' | 'null' | null
	trial_days: number
	trial_ends_on: null | unknown
	updated_at: '2008-01-10T11:00:00-05:00'
}
