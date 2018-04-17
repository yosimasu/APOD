export { NavigationActions } from 'react-navigation';

export { default as dva } from './dva';

export const delay = time => new Promise(resolve => setTimeout(resolve, time));
