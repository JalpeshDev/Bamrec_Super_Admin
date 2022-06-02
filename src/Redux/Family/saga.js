import { all, takeEvery, put, takeLatest } from "redux-saga/effects";
import actions from "./action";
import { axiosPost } from "../axiosHelper";


export function* modalVisible({ payload }) {
  try {
  } catch (error) {}
}
export function* addMentor({ payload }) {
  try {
  } catch (error) {}
}

export default function* rootSaga() {
  yield all([takeEvery(actions.MENTORS_MODAL_VISIBLE, modalVisible),
  ]);
}
