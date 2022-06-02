import { all, takeEvery, put, takeLatest } from 'redux-saga/effects';
import actions from './action';
import { axiosPost } from '../axiosHelper';
import { push } from 'connected-react-router';
import { getToken, clearToken } from '../../helper/utility';

/**
 * post organization data
 *
 */
export function* addOrganization({ payload }) {
    try {
        console.log("saga",payload)
        const { data } = yield axiosPost(payload, `login`);
        yield put(actions.loginSuccess(data));
    } catch (error) {
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(actions.ADD_ORGANIZATION_DATA, addOrganization),
    ]);
}