import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTGiftCard {
	api_client_id: number
	balance: number
	code: '1234 4567 8901 2ABC'
	created_at: '2008-01-10T11:00:00-05:00'
	currency: ShopifyRESTCurrencyCode
	customer_id: number
	disabled_at: '2008-01-10T11:00:00-05:00'
	expires_on: '2020-01-31' | null
	id: number
	initial_value: number
	last_characters: '2ABC'
	line_item_id: number
	note: 'A note'
	order_id: number
	template_suffix: 'birthday' | null
	user_id: number
	updated_at: '2008-01-10T11:00:00-05:00'
}
