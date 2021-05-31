import fs from 'fs/promises'
import puppeteer from 'puppeteer'

type Field = {
	key: string
	example: string
	readOnly: boolean
	nullable: boolean
	isEnum?: boolean
	enum?: string[]
}

const urls = [
	'https://shopify.dev/docs/admin-api/rest/reference',
	'https://shopify.dev/docs/admin-api/rest/reference/access',
	'https://shopify.dev/docs/admin-api/rest/reference/access/accessscope',
	'https://shopify.dev/docs/admin-api/rest/reference/access/storefrontaccesstoken',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/report',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/sales',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/payments',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/taxes',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/visits',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/customers',
	'https://shopify.dev/docs/admin-api/rest/reference/billing',
	'https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcharge',
	'https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit',
	'https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge',
	'https://shopify.dev/docs/admin-api/rest/reference/billing/usagecharge',
	'https://shopify.dev/docs/admin-api/rest/reference/customers',
	'https://shopify.dev/docs/admin-api/rest/reference/customers/customer',
	'https://shopify.dev/docs/admin-api/rest/reference/customers/customer-address',
	'https://shopify.dev/docs/admin-api/rest/reference/customers/customersavedsearch',
	'https://shopify.dev/docs/admin-api/rest/reference/deprecated_api_calls',
	'https://shopify.dev/docs/admin-api/rest/reference/discounts',
	'https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode',
	'https://shopify.dev/docs/admin-api/rest/reference/discounts/pricerule',
	'https://shopify.dev/docs/admin-api/rest/reference/events',
	'https://shopify.dev/docs/admin-api/rest/reference/events/event',
	'https://shopify.dev/docs/admin-api/rest/reference/events/webhook',
	'https://shopify.dev/docs/admin-api/rest/reference/inventory',
	'https://shopify.dev/docs/admin-api/rest/reference/inventory/inventoryitem',
	'https://shopify.dev/docs/admin-api/rest/reference/inventory/inventorylevel',
	'https://shopify.dev/docs/admin-api/rest/reference/inventory/location',
	'https://shopify.dev/docs/admin-api/rest/reference/marketingevent',
	'https://shopify.dev/docs/admin-api/rest/reference/metafield',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/article',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/asset',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/blog',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/comment',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/page',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/redirect',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/scripttag',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store/theme',
	'https://shopify.dev/docs/admin-api/rest/reference/orders',
	'https://shopify.dev/docs/admin-api/rest/reference/orders/abandoned-checkouts',
	'https://shopify.dev/docs/admin-api/rest/reference/orders/draftorder',
	'https://shopify.dev/docs/admin-api/rest/reference/orders/order',
	'https://shopify.dev/docs/admin-api/rest/reference/orders/order-risk',
	'https://shopify.dev/docs/admin-api/rest/reference/orders/refund',
	'https://shopify.dev/docs/admin-api/rest/reference/orders/transaction',
	'https://shopify.dev/docs/admin-api/rest/reference/plus',
	'https://shopify.dev/docs/admin-api/rest/reference/plus/giftcard',
	'https://shopify.dev/docs/admin-api/rest/reference/plus/multipass',
	'https://shopify.dev/docs/admin-api/rest/reference/plus/user',
	'https://shopify.dev/docs/admin-api/rest/reference/products',
	'https://shopify.dev/docs/admin-api/rest/reference/products/collect',
	'https://shopify.dev/docs/admin-api/rest/reference/products/collection',
	'https://shopify.dev/docs/admin-api/rest/reference/products/customcollection',
	'https://shopify.dev/docs/admin-api/rest/reference/products/product',
	'https://shopify.dev/docs/admin-api/rest/reference/products/product-image',
	'https://shopify.dev/docs/admin-api/rest/reference/products/product-variant',
	'https://shopify.dev/docs/admin-api/rest/reference/products/smartcollection',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/checkout',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/collectionlisting',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/mobileplatformapplication',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/payment',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/productresourcefeedback',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/productlisting',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels/resourcefeedback',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/assignedfulfillmentorder',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/cancellationrequest',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/carrierservice',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillment',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentevent',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentorder',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentrequest',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentservice',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/locationsformove',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/balance',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/dispute',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/payout',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/transaction',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties/country',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties/currency',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties/policy',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties/province',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties/shippingzone',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties/shop',
	'https://shopify.dev/docs/admin-api/rest/reference/tendertransaction',
]

const blacklist = [
	'https://shopify.dev/docs/admin-api/rest/reference',
	'https://shopify.dev/docs/admin-api/rest/reference/access',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/sales',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/payments',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/taxes',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/visits',
	'https://shopify.dev/docs/admin-api/rest/reference/analytics/shopify-ql/customers',
	'https://shopify.dev/docs/admin-api/rest/reference/billing',
	'https://shopify.dev/docs/admin-api/rest/reference/customers',
	'https://shopify.dev/docs/admin-api/rest/reference/discounts',
	'https://shopify.dev/docs/admin-api/rest/reference/events',
	'https://shopify.dev/docs/admin-api/rest/reference/inventory',
	'https://shopify.dev/docs/admin-api/rest/reference/online-store',
	'https://shopify.dev/docs/admin-api/rest/reference/orders',
	'https://shopify.dev/docs/admin-api/rest/reference/plus',
	'https://shopify.dev/docs/admin-api/rest/reference/plus/multipass',
	'https://shopify.dev/docs/admin-api/rest/reference/products',
	'https://shopify.dev/docs/admin-api/rest/reference/sales-channels',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/cancellationrequest',
	'https://shopify.dev/docs/admin-api/rest/reference/shipping-and-fulfillment/fulfillmentrequest',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments',
	'https://shopify.dev/docs/admin-api/rest/reference/shopify_payments/balance',
	'https://shopify.dev/docs/admin-api/rest/reference/store-properties',
]

const whitelist: string[] = []

async function main() {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	try {
		await fs.mkdir('./generated')
	} catch (e) {}

	await fs.writeFile(
		`./generated/ShopifyRESTCurrencyCode.ts`,
		`export type ShopifyRESTCurrencyCode = "USD" | "EUR" | "CZK" | string\n`
	)

	const tasks = whitelist.length ? whitelist : urls

	for (const url of tasks) {
		if (blacklist.indexOf(url) > -1) {
			console.log('Ignoring:', url)
			continue
		}
		console.log('Scraping:', url)
		await page.goto(url)

		const scraped = await page.evaluate(function scraper() {
			const result: Field[] = []

			const name =
				'ShopifyREST' +
				document
					.querySelector<HTMLHeadingElement>('h1.article-title')
					?.textContent?.trim()
					.split(' ')
					.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
					.join('')

			document.querySelectorAll('#properties-2021-04 + .api-properties tr').forEach((tr) => {
				const key = tr.querySelector<HTMLTableDataCellElement>('td:first-child')
				const valueTd = tr.querySelector<HTMLTableDataCellElement>('td:last-child')
				const value = tr.querySelector<HTMLPreElement>('td:last-child pre')

				if (!key) {
					throw new Error('Missing key element')
				}
				if (!valueTd) {
					throw new Error('Missing valueTd element')
				}
				if (!value) {
					throw new Error('Missing value element')
				}

				const keyName = key.textContent?.trim().split('\n')[0] ?? ''

				const isEnum = (valueTd.textContent?.indexOf('Valid values:') ?? -1) > -1
				const nullable = Array.from(
					valueTd.querySelectorAll<HTMLSpanElement>('p code')
				).some((c) => c.textContent === 'null')

				let example = (value.textContent ?? '').trim()

				if (
					example.indexOf('"id"') === 0 &&
					keyName !== 'id' &&
					keyName.indexOf('_id') > -1
				) {
					example = example.replace('"id"', `"${keyName}"`)
				}

				const field: Field = {
					key: keyName,
					readOnly: (key.textContent?.indexOf('read-only') ?? -1) > -1,
					nullable,
					example,
				}
				if (isEnum) {
					let enumValues = Array.from(
						valueTd.querySelectorAll<HTMLSpanElement>('ul li strong, ul li code')
					).map((el) => el.textContent ?? '')

					if (!enumValues?.length) {
						enumValues = Array.from(
							valueTd.querySelectorAll<HTMLSpanElement>('p code')
						).map((el) => el.textContent ?? '')
					}

					enumValues = enumValues.map((ev) => ev.replace(' (optional)', ''))

					if (enumValues && enumValues.length) {
						field.enum = enumValues
					}
				}
				result.push(field)
			})

			const ts = `export interface ${name} { ${result
				.map((r) => {
					const nullableSuffix = r.nullable ? ' | null' : ''
					if (r.enum) {
						return `${r.key}: ${r.enum
							.map((e) => {
								switch (e) {
									case 'true':
									case 'false':
									case 'null':
									default:
										return `"${e}"`
								}
							})
							.join(' | ')}${nullableSuffix}`
					} else {
						if (r.key.endsWith('_at')) {
							const nullable = r.key.indexOf('null') > -1
							return `${r.key}: "2008-01-10T11:00:00-05:00"${
								nullable ? ' | null' : nullableSuffix
							}`
						}
						return `${r.example}${nullableSuffix}`
					}
				})
				.join('\n')} }`
			if (!result.length) {
				return null
			}
			return { name: name, interface: ts, result }
		})

		if (scraped) {
			let output = scraped.interface
				.replace(/\{\}/g, 'Record<string, unknown>')
				.replace(/\:\s[0-9\.]+,?\n/g, ': number\n')
				.replace(/\:\snull,?\n/g, ': null | unknown\n')
				.replace(/\:\s(true|false),?\n/g, ': boolean\n')
				.replace(/"(USD|EUR|CAD)"/g, 'ShopifyRESTCurrencyCode')
				.replace(/\[/gi, 'Array<')
				.replace(/\]/gi, '>')
				.replace(/\\\\"/gi, '\\"')
				.replace(/\n\s+\},\n\s+{\n/gi, '\n} | {\n')
				.replace(/Array<[0-9\.\,\s]+>/gi, 'Array<number>')
				.replace(/Array\<([a-z0-9 \(\)'",_\s\n]+)\>/gi, (_, str: string) => {
					return `Array<${str
						.split(',')
						.map((s) => s.trim())
						.join(' | ')}>`
				})
				.replace(/Array<>/gi, 'Array<unknown>')

			const re = /(ShopifyREST[a-z]+)/gi

			let references: null | string[] = null

			const unique = new Set<string>()

			while ((references = re.exec(output))) {
				unique.add(references[1])
			}

			unique.delete(scraped.name)

			if (unique.size > 0) {
				output = `\n${output}`
			}

			for (const ref of unique.values()) {
				output = `import type { ${ref} } from './${ref}'\n${output}`
			}

			await fs.writeFile(`./generated/${scraped.name}.ts`, output)
		} else {
			console.log(`Nothing scraped on ${url}`)
		}
	}
	await browser.close()
}

main()
