/**
 * ログインしたユーザー情報を格納する
 */
export const useUserStore = defineStore('UserStore', () => {
  // ============ state:定義 ============
  const _authUser = ref<User | null>(null)

  // ============ actions:関数・処理 ============
  function setAuthUser(param: User | null) {
    _authUser.value = param
  }

  // ============ getters:ゲッター系 ============
  const isLogin = computed(
    () => _authUser.value != null && _authUser.value.emailVerified
  )
  const authUser = computed(() => _authUser.value)

  return {
    setAuthUser,

    isLogin,
    authUser,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
