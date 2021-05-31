export interface ShopifyRESTOrderRisk {
	cause_cancel: boolean
	checkout_id: number
	display: boolean
	id: number
	merchant_message: 'This order came from an anonymous proxy.'
	message: 'This order came from an anonymous proxy.'
	order_id: number
	recommendation: 'cancel' | 'investigate' | 'accept'
	score: number
	source: 'External'
}
