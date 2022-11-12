const IMAGES_COUNT = 14;

export const getBackground = () => {
	const imageIndex = Math.floor(Math.random() * IMAGES_COUNT)

	return `url(/background/${imageIndex}.jpeg)`
}