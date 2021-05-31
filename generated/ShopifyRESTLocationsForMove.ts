export interface ShopifyRESTLocationsForMove {
	locations_for_move: Array<
		| {
				location: {
					id: number
					name: '123 Main St'
				}
				movable: boolean
				message: "Shirt - Medium can't be changed because it isn't stocked at this location."
		  }
		| {
				location: {
					id: number
					name: 'Alpha Location'
				}
				movable: boolean
				message: null | unknown
		  }
		| {
				location: {
					id: number
					name: 'Bravo Location'
				}
				movable: boolean
				message: 'Current location.'
		  }
		| {
				location: {
					id: number
					name: 'Charlie Location'
				}
				movable: boolean
				message: 'No items are stocked at this location.'
		  }
		| {
				location: {
					id: number
					name: 'Delta Location'
				}
				movable: boolean
				message: "2 items can't be changed because they aren't stocked at this location."
		  }
	>
}
