import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosPost } from '../axiosHelper';

/**
 * Request to create subMember report.
 */
export function* createSubMember({ queryParams }) {
    try {
        const { data } = yield axiosPost(queryParams, `subMember/create`);
        yield put(actions.createSubMemberSuccess(data));
    } catch (error) {
        yield put(actions.createSubMemberFailure(error.message, error.data || {}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.CREATE_SUBMEMBER_REQUEST, createSubMember),
    ]);
}