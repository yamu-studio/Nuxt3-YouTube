export default defineNuxtRouteMiddleware((to, from) => {
  try {
    // 右クリ禁止
    if (useRuntimeConfig().public.NUXT_APP_MODE != 'dev') {
      document.oncontextmenu = function () {
        return false
      }
    }
    // 遷移時一番上に移動
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })

    // 認証処理はここ
  } catch (error) {
    // console.debug(error);
    // return createError({
    //   statusCode: 500,
    //   message: "ユーザー認証時にエラーが起きました。",
    // });
  }
})
