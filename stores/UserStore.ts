/**
 * ログインしたユーザー情報を格納する
 */
export const useUserStore = defineStore('UserStore', () => {
  // ============ state:定義 ============
  const _authUser = ref(null)
  const _windowWidth = ref(0)
  const _isDev = ref(true)

  // ============ actions:関数・処理 ============
  function setAuthUser(param) {
    _authUser.value = param
  }
  function setWidth(param) {
    _windowWidth.value = param
  }
  function setDev(param) {
    _isDev.value = param
  }
  function logout() {
    // _isDev.value = param
  }
  function cleanData() {
    _authUser.value = null
    _windowWidth.value = 0
  }

  // ============ getters:ゲッター系 ============
  const isLogin = computed(() => _authUser.value != null)
  const authUser = computed(() => _authUser.value)
  const isMobile = computed(() => _windowWidth.value <= 767)
  const isWideScreen = computed(() => 1312 <= _windowWidth.value)
  const isDev = computed(() => _isDev.value)
  const width = computed(() => _windowWidth.value)

  return {
    setAuthUser,
    setWidth,
    setDev,
    logout,
    cleanData,

    isLogin,
    authUser,
    isMobile,
    isWideScreen,
    isDev,
    width,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
