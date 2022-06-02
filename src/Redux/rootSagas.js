import { all } from "redux-saga/effects";
import authSaga from "./Auth/saga";
import membersSaga from "./Members/saga";
import teamMeetingSaga from "./TeamMeeting/saga";
import dropdownSaga from "./Dropdown/saga";
import livingEnvironmemntSaga from "./Environment/saga";
import subMember from "./SubMember/saga";
import activitySaga from "./Activity/saga";
import organizationSaga from "./Organization/saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    membersSaga(),
    teamMeetingSaga(),
    dropdownSaga(),
    livingEnvironmemntSaga(),
    subMember(),
    activitySaga(),
    organizationSaga(),
  ]);
}
