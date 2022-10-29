import { createStore, useStore } from "vuex";
import { apiClient } from "../utils/axios.js";

export const STORE_TYPE = {
  isLoading: "isLoading",
  popupType: "popupType",
  loginUserIdx: "loginUserIdx",
  boardIdx: "boardIdx",
  boardBody: "boardBody",
  userNickName: "userNickName",
};

export const POPUP_TYPE = {
  NONE: "NONE",
  WRITE_BOARD: "WRITE_BOARD",
  DETAIL_SCREEN: "DETAIL_SCREEN",
  REPORT: "REPORT",
};

const store = createStore({
  state: {
    isLoading: false,
    popupType: POPUP_TYPE.NONE,
    loginUserIdx: "",
    boardIdx: "",
    boardBody: "",
    userNickName: "",
  },
  mutations: {
    /**
     * @param {store} state
     * @param {boolean} value
     */
    isLoading(state, value) {
      state.isLoading = value;
    },
    /**
     * @param {store} state
     * @param {POPUP_TYPE} value
     */
    popupType(state, value) {
      state.popupType = value;
    },
    /**
     * @param {store} state
     * @param {string} value
     */
    loginUserIdx(state, value) {
      state.loginUserIdx = value;
    },
    /**
     *
     * @param {store} state
     * @param {string} value
     */
    boardIdx(state, value) {
      state.boardIdx = value;
    },
    /**
     *
     * @param {store} state
     * @param {string} value
     */
    boardBody(state, value) {
      state.boardBody = value;
    },
    /**
     *
     * @param {store} state
     * @param {string} value
     */
    userNickName(state, value) {
      state.userNickName = value;
    },
  },
});

export default store;
//
// export default createStore({
// 	state: {
// 		isLoading: false,
// 	},
// 	mutations: {
// 		isLoading(value) {
// 			//value : boolean;
// 			state.boardDetail = value;
// 		},
// 	},
// });
// const _store = useStore();

export const getStore = () => {
  return store;
};
