/**
 * ログインしたユーザー情報を格納する
 */
export const useUserStore = defineStore("UserStore", {
  state: () => ({
    //ユーザ情報
    _authUser: null,
    _windowWidth: 768,
    _isDev: true,
  }),
  actions: {
    setAuthUser(param: any) {
      this._authUser = param;
    },
    setWidth(param: number) {
      this._windowWidth = param;
    },
    setDev(param: boolean) {
      this._isDev = param;
    },
    async logout() {
      // console.log("logout!!!");
    },
    cleanData() {
      this._authUser = null;
      this._windowWidth = 768;
    },
  },
  getters: {
    isLogin: (state) => {
      return state._authUser != null;
    },

    isMobile: (state) => state._windowWidth <= 767,
    isWideScreen: (state) => 1312 <= state._windowWidth,
    isDev: (state) => state._isDev,
    width: (state) => state._windowWidth,
    authUser: (state) => state._authUser,
  },
  // persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
