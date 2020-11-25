import React from 'react';
import './nouislider.style.css';
import style from './style.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import Nouislider from 'nouislider-react';

const percent = ( need, total ) => (need / total) * 100;

class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
	    	num: this.props.start,
	    };

	    this.changeNum = this.changeNum.bind(this);
	}

	/**
	 * Обновление внутреннего состояния выбранного значения.
	 * @param  {number} num
	 */
	changeNum(num) {
		this.setState(() => ({
		  num
		}));
	}

	render() {
		const {
			start,
			min,
			max,
			stepPoints,
			text,
			/**
			 * Тип слайдера - amount или term
			 */
			type,
			/**
			 * в changeHandler нужно передавать выбранное значение слайдера
			 * для обновления внешнего состояния.
			 */
			changeHandler,
			/**
			 * Именно эта функция вызывается при каждом обновлении слайдера
			 * для синхронизации между слайдерами и выбранным объектом настроек.
			 * @param  {string} тип слайдера, который в котором произошли к
			 * изменения - amount или term.
			 * @param  {number} выбранное значение в слайдере.
			 */
			sincSlides,
		} = this.props;


		/**
		 * Так как настройки Nouislider'а требуют процентов для создания
		 * слайдеров с нелинейными шагами, нужно перевести точки в проценты
		 * от всей длины слайдера (максимальное значение.)
		 */
		const range = {};
		for ( let point in stepPoints ) {
			const step = stepPoints[ point ];
			range[ `${percent( point, max )}%` ] = [ +point, step ];
		}

		range.min = min;
		range.max = max;

		return (
			<div className={ style['slider-wrap'] }>
				<div className={ style.info }>
					<span className={ style.num }>
						{
							type === 'term'
								?
									this.state.num > 30 ?
										dayjs().locale( 'ru' ).add( this.state.num, 'day' )
										.diff( dayjs(), 'month' )
										:
										this.state.num
								:
								this.state.num
							
						}
					</span>
					<span className={ style.text }>
						{
							type === 'term'
								?
									this.state.num > 30 ?
										'срок, месяцeв'
										:
										text
								:
								text
						}
					</span>
				</div>

				<div>
					<Nouislider
						connect='lower'
					    range={ range }
					    start={ start }
					    onSlide={ num => {
					    	num = +num;

					    	this.changeNum( num );
					    	changeHandler( num );
					    	sincSlides( type, num );

					    } }	
					    onUpdate={ num => {
					    	num = +num;
					    	this.changeNum( num );
							changeHandler( num );
					    } }	
					/>
				</div>
			</div>
		)
	}
}

export default Slider;