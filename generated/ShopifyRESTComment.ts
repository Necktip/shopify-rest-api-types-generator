export interface ShopifyRESTComment {
	article_id: number
	author: 'Soleone'
	blog_id: number
	body: 'This is a _great_ article.'
	body_html: '<p>This is a <em>great</em> article.</p>'
	created_at: '2008-01-10T11:00:00-05:00'
	email: 'sole@one.de'
	id: number
	ip: '127.0.0.1'
	published_at: '2008-01-10T11:00:00-05:00'
	status:
		| 'pending'
		| 'spam'
		| 'unapproved'
		| 'approved'
		| 'unapproved (default)'
		| 'published'
		| 'spam'
		| 'removed'
	updated_at: '2008-01-10T11:00:00-05:00'
	user_agent: 'Mozilla/5.0'
}
