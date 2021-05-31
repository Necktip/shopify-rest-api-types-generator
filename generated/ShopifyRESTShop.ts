import type { ShopifyRESTCurrencyCode } from './ShopifyRESTCurrencyCode'

export interface ShopifyRESTShop {
	address1: '1 Infinite Loop'
	address2: 'Suite 100'
	checkout_api_supported: boolean
	city: 'Cupertino'
	country: 'US'
	country_code: 'US'
	country_name: 'United States'
	county_taxes: 'true' | 'null' | null
	created_at: '2008-01-10T11:00:00-05:00'
	customer_email: 'customers@apple.com'
	currency: ShopifyRESTCurrencyCode
	domain: 'shop.apple.com'
	enabled_presentment_currencies: Array<
		ShopifyRESTCurrencyCode | 'GBP' | ShopifyRESTCurrencyCode | 'JPY'
	>
	eligible_for_card_reader_giveaway: boolean
	eligible_for_payments: boolean
	email: 'steve@apple.com'
	finances: boolean
	force_ssl: 'true' | 'false'
	google_apps_domain: null | unknown
	google_apps_login_enabled: 'true' | 'null' | null
	has_discounts: boolean
	has_gift_cards: boolean
	has_storefront: boolean
	iana_timezone: 'America/New_York'
	id: number
	latitude: number
	longitude: -75.68903
	money_format: '$'
	money_in_emails_format: '$'
	money_with_currency_format: '$ USD'
	money_with_currency_in_emails_format: '$ USD'
	multi_location_enabled: boolean
	myshopify_domain: 'apple.myshopify.com'
	name: 'Apple Computers'
	password_enabled: boolean
	phone: null | unknown
	plan_display_name: 'enterprise'
	pre_launch_enabled: boolean
	cookie_consent_level: 'implicit'
	plan_name: 'enterprise'
	primary_locale: 'fr'
	primary_location_id: number
	province: 'California'
	province_code: 'CA'
	requires_extra_payments_agreement: boolean
	setup_required: boolean
	shop_owner: 'Steve Jobs'
	source: null | unknown
	taxes_included: 'true' | 'null' | null
	tax_shipping: 'true' | 'false'
	timezone: '(GMT-05:00) Eastern Time'
	updated_at: '2008-01-10T11:00:00-05:00'
	weight_unit: 'lb'
	zip: '95014'
}
