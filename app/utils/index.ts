import moment from 'moment';
import { isNil as _isNil } from 'lodash';

// tslint:disable-next-line:no-namespace
export namespace Utils {
  export function currentYear() {
    return moment()
      .utc()
      .year();
  }

  export function isNil(value: any) {
    return _isNil(value);
  }

  export function getUrlQueryVariable(queryString: string, variable: string) {
    const query = queryString.substring(1);
    const vars = query.split('&');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    // console.log('Query variable %s not found', variable);
    return '';
  }
}
