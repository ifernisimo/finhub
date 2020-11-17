import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// eslint-disable-next-line
export default days => dayjs().locale('ru').add(days, 'day').format('D MMMM YYYY');