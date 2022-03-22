import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosPost } from '../axiosHelper';
import { push } from 'connected-react-router';
import { getToken, clearToken } from '../../helper/utility';

/**
 * Call to login.
 *
 */
export function* loginRequest({ payload }) {
    try {
        const { data } = yield axiosPost(payload, `login`);
        let { token } = data.data.user;
        if (token) {
            yield localStorage.setItem('auth_token', token);
            yield localStorage.setItem('user', JSON.stringify(data.data.user));
            yield put(actions.loginSuccess(data.data.user, token));
            yield put(push('/members'));
        } else {
            throw new Error('Invalid credentials provided.');
        }
        yield put(actions.loginSuccess(data));
    } catch (error) {
        yield put(actions.loginFailure(error.message, error.data || {}));
    }
}

/**
 * Call to log user out.
 *
 */
export function* logout() {
    try {
        clearToken();
        yield put(actions.logoutSuccess());
        yield put(push('/'));
    } catch (error) {
        yield put(actions.logoutError());
    }
}

/**
 * check if authenticated user access.
 *
 */
export function* checkAuthorization() {
    const token = getToken().get('authToken');
    const user = getToken().get('user');
    if (token && user) {
        yield put(actions.loginSuccess(user, token));
    } else {
        clearToken();
        yield put(push('/'));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.CHECK_AUTHORIZATION, checkAuthorization),
        takeEvery(actions.LOGIN_REQUEST, loginRequest),
        takeEvery(actions.LOGOUT_REQUEST, logout)
    ]);
}