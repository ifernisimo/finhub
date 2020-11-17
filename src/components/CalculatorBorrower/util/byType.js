export const minByType = ( settings, type ) => {
	const values = [];
	const steps = [];

	for ( let key in settings ) {
		const item = settings[ key ];

		values.push( item[ 'min_' + type ] );
		steps.push( item[ 'step_' + type ] );
	}

	return [ Math.min( ...values ), Math.min( ...steps ) ];
}

export const maxByType = ( settings, type ) => {
	const values = [];

	for ( let key in settings ) {
		values.push( settings[ key ][ 'max_' + type ] );
	}

	return Math.max( ...values );
}