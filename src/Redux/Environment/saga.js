import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosPost, axiosGet } from '../axiosHelper';
import { push } from 'connected-react-router';

/**
 * Request to create livingEnvirnoment report.
 */
export function* createLivingEnvironmentReport({ queryParams }) {
    try {
        const { data } = yield axiosPost(queryParams, `livingEnvironment/create`);
        yield put(actions.createLivingEnvironmentReportSuccess(data));
        yield put(push('/environments'));
    } catch (error) {
        yield put(actions.createLivingEnvironmentReportFailure(error.message, error.data || {}));
    }
}

/**
 * Request to get livingEnvirnoment list.
 */
export function* getLivingEnvironmentReport() {
    try {
        const { data } = yield axiosGet(`livingEnvironment`);
        yield put(actions.getLivingEnvironmentReportSuccess(data.data));
    } catch (error) {
        yield put(actions.getLivingEnvironmentReportFailure(error.message, error.data || {}));
    }
}

/**
 * Request to detail livingEnvirnoment report.
 */
export function* LivingEnvironmentDetail({ id }) {
    try {
        const { data } = yield axiosGet(`livingEnvironment/${id}`);
        yield put(actions.LivingEnvironmentDetailSuccess(data));
    } catch (error) {
        yield put(actions.LivingEnvironmentDetailFailure(error.message, error.data || {}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.CREATE_LIVINGENVIRONMENT_REPORT_REQUEST, createLivingEnvironmentReport),
        takeEvery(actions.GET_LIVINGENVIRONMENT_REPORT_REQUEST, getLivingEnvironmentReport),
        takeEvery(actions.LIVINGENVIRONMENT_DETAIL_REQUEST, LivingEnvironmentDetail),
    ]);
}