/**
 * ログインしたユーザー情報を格納する
 */
export const useUserStore = defineStore('UserStore', {
  state: () => ({
    //ユーザ情報
    _authUser: null,
    _authChannel: null,
    _authToken: null,
  }),
  actions: {
    setAuthUser(param: any) {
      this._authUser = param
    },
    setAuthChannel(param: any) {
      this._authChannel = param
    },
    setAuthToken(param: any) {
      this._authToken = param
    },
  },
  getters: {
    isLogin: (state) => {
      return state._authUser != null
    },
    authUser: (state) => state._authUser,
    authChannel: (state) => state._authChannel,
    authToken: (state) => state._authToken,
  },
  // persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
