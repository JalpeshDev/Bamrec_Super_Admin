import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosPost, axiosGet } from '../axiosHelper';
import { push } from 'connected-react-router';

/**
 * Request to create teamMeeting report.
 */
export function* createTeemMeetingReport({ queryParams }) {
    try {
        const { data } = yield axiosPost(queryParams, `teamMeeting/create`);
        yield put(actions.createTeemMeetingReportSuccess(data));
        yield put(push('/teamMeeting'));
    } catch (error) {
        yield put(actions.createTeemMeetingReportFailure(error.message, error.data || {}));
    }
}

/**
 * Request to get teamMeeting list.
 */
export function* getTeemMeetingReport() {
    try {
        const { data } = yield axiosGet(`teamMeeting`);
        yield put(actions.getTeemMeetingReportSuccess(data.data));
    } catch (error) {
        yield put(actions.getTeemMeetingReportFailure(error.message, error.data || {}));
    }
}

/**
 * Request to detail teamMeeting report.
 */
export function* teemMeetingDetail({ id }) {
    try {
        const { data } = yield axiosGet(`teamMeeting/${id}`);
        yield put(actions.teemMeetingDetailSuccess(data));
    } catch (error) {
        yield put(actions.teemMeetingDetailFailure(error.message, error.data || {}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.CREATE_TEAMMEETING_REPORT_REQUEST, createTeemMeetingReport),
        takeEvery(actions.GET_TEAMMEETING_REPORT_REQUEST, getTeemMeetingReport),
        takeEvery(actions.TEAMMEETING_DETAIL_REQUEST, teemMeetingDetail),
    ]);
}