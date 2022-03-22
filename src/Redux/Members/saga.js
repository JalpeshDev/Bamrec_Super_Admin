import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosGet } from '../axiosHelper';

/**
 * get all members.
 *
 */
export function* getMemberRequest({ queryParams }) {
    try {
        const { data } = yield axiosGet(`users`);
        yield put(actions.getMemberSuccess(data));
    } catch (error) {
        yield put(actions.getMemberFailure(error.message, error.data || {}));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actions.GET_MEMBER_REQUEST, getMemberRequest)]);
}