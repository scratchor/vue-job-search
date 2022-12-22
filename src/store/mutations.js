import {
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATION,
} from "@/store/constants";

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATION](state, selectedOrganizations) {
    state.selectedOrganizations = selectedOrganizations;
  },
  [ADD_SELECTED_JOB_TYPES](state, selectedJobTypes) {
    state.selectedJobTypes = selectedJobTypes;
  },
};

export default mutations;
