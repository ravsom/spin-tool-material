/**
 * Created by rs on 07/01/17.
 */

export const updateSlider = (sliderValue) => {
	return {
		type: 'SLIDER_UPDATE',
		value: sliderValue
	}
};