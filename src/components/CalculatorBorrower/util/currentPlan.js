/**
 * вычисляет текущий объект настроек на основании данных со слайдера.
 * @param  {string} type     тип слайдера - term/val
 * @param  {object} settings объект с настройками калькулятора
 * @param  {number} val      данные, от которых определять тип.
 * @return {string}          настройки, подходящие для этих данных
 */
export default ( type, settings, val ) => {
	const planNames = Object.keys( settings ),
		  firstPlan = planNames[ 0 ],
		  lastPlan = planNames[ planNames.length - 1 ];

	let i = 0;
	let prep = firstPlan;
	for ( let plan in settings ) {
		if ( settings[ plan ][ 'min_' + type ] <= val ) {
			prep = planNames[i];
		} else {
			return prep;
		}

		i++;
	}

	return lastPlan;
}