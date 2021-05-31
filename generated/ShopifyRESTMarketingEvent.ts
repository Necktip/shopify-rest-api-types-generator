import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTMarketingEvent {
	remote_id: '123abc'
	event_type:
		| 'ad'
		| 'post'
		| 'message'
		| 'retargeting'
		| 'transactional'
		| 'affiliate'
		| 'loyalty'
		| 'newsletter'
		| 'abandoned_cart'
	marketing_channel: 'search' | 'display' | 'social' | 'email' | 'referral'
	paid: boolean
	referring_domain: 'facebook.com'
	budget: number
	currency: ShopifyRESTCurrencyCode
	budget_type: 'budget' | 'daily' | 'lifetime'
	started_at: '2008-01-10T11:00:00-05:00'
	scheduled_to_end_at: '2008-01-10T11:00:00-05:00'
	ended_at: '2008-01-10T11:00:00-05:00'
	marketing_event: {
		utm_campaign: 'CanadaDay2021'
		utm_source: 'facebook'
		utm_medium: 'cpc'
	}
	description: 'Facebook carousel ad #{Time.now.utc.year}'
	manage_url: 'https://mymarketingapp.com/ad/1234'
	preview_url: 'https://www.facebook.com/123456/'
	marketed_resources: Array<{
		type: 'product'
		id: number
	}>
}
