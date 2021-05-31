export interface ShopifyRESTReport {
	category: 'custom_app_reports'
	id: number
	name: 'My App Report'
	shopify_ql: 'SHOW total_sales BY order_id FROM sales SINCE -1m UNTIL today ORDER BY total_sales'
	updated_at: '2008-01-10T11:00:00-05:00'
}
