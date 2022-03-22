import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosPost, axiosGet } from '../axiosHelper';
import { push } from 'connected-react-router';

/**
 * Request to create activity report.
 */
export function* createActivityReport({ queryParams }) {
    try {
        const { data } = yield axiosPost(queryParams, `activity/create`);
        yield put(actions.createActivityReportSuccess(data));
        yield put(push('/activities'));
    } catch (error) {
        yield put(actions.createActivityReportFailure(error.message, error.data || {}));
    }
}

/**
 * Request to get activity list.
 */
export function* getActivityReport() {
    try {
        const { data } = yield axiosGet(`activity`);
        yield put(actions.getActivityReportSuccess(data.data));
    } catch (error) {
        yield put(actions.getActivityReportFailure(error.message, error.data || {}));
    }
}

/**
 * Request to detail activity report.
 */
export function* activityDetail({ id }) {
    try {
        const { data } = yield axiosGet(`activity/${id}`);
        yield put(actions.activityDetailSuccess(data));
    } catch (error) {
        yield put(actions.activityDetailFailure(error.message, error.data || {}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.CREATE_ACTIVITY_REPORT_REQUEST, createActivityReport),
        takeEvery(actions.GET_ACTIVITY_REPORT_REQUEST, getActivityReport),
        takeEvery(actions.ACTIVITY_DETAIL_REQUEST, activityDetail),
    ]);
}