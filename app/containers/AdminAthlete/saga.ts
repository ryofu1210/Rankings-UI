import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import {} from './selectors';
import * as actions from './actions';
import { delay } from 'redux-saga';
import { ISelectOption } from 'components/CategoriesFilters/types';
import {
  APIGetAthleteSuggestionsResponse,
  apiGetAthleteSuggestions,
  apiAdminGetAthlete,
  APIAdminGetAthleteResponse,
} from './api';

export function* getAthleteSuggestions(
  action: ReturnType<typeof actions.loadAthleteSuggestions>,
) {
  yield call(delay, 500);
  const value = action.payload;
  try {
    const results: APIGetAthleteSuggestionsResponse = yield call(
      apiGetAthleteSuggestions,
      value,
    );
    const options = results.items.map(item => {
      const option: ISelectOption = {
        value: item.id,
        label: `${item.name} - ${item.email}`,
      };
      return option;
    });
    yield put(actions.setAthleteSuggestions(options));
  } catch (err) {
    console.log('err: ', err);
  }
}

export function* getAthlete(
  action: ReturnType<typeof actions.loadAthlete>,
) {
  try {
    const id = action.payload;
    const result: APIAdminGetAthleteResponse = yield call(apiAdminGetAthlete, id);
    yield put(actions.setAthlete(result.athlete));
  } catch (err) {
    console.log('err: ', err);
  }
}

export default function* adminAthleteSaga() {
  yield takeLatest(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, getAthleteSuggestions);
  yield takeLatest(ActionTypes.LOAD_ATHLETE, getAthlete);
}
