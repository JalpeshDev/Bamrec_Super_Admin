import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosGet } from '../axiosHelper';

/**
 * Request to get duration list.
 */
export function* getDuration() {
    try {
        const { data } = yield axiosGet(`getDurations`);
        yield put(actions.getDurationSuccess(data.data));
    } catch (error) {
        yield put(actions.getDurationFailure(error.message, error.data || {}));
    }
}

/**
 * Request to get Organization list.
 */
export function* getOrganization() {
    try {
        const { data } = yield axiosGet(`getOrganizations`);
        yield put(actions.getOrganizationSuccess(data.data));
    } catch (error) {
        yield put(actions.getOrganizationFailure(error.message, error.data || {}));
    }
}

/**
 * Request to get livingEnvironment list.
 */
export function* getLivingEnvironment() {
    try {
        const { data } = yield axiosGet(`getEnvironments`);
        yield put(actions.getLivingEnvironmentSuccess(data.data));
    } catch (error) {
        yield put(actions.getLivingEnvironmentFailure(error.message, error.data || {}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DURATION_REQUEST, getDuration),
        takeEvery(actions.GET_ORGANIZATION_REQUEST, getOrganization),
        takeEvery(actions.GET_LIVINGENVIRNOMENT_REQUEST, getLivingEnvironment)
    ]);
}