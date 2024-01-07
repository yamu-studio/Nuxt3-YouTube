/**
 * 課題
 * ・情報取得までを非同期処理にし、
 * return の部分を同期処理でラグ無くす
 * 　→myPostで自分の投稿を出せないから。
 */
export default defineNuxtRouteMiddleware((from, to) => {
  const UserStore = useUserStore();

  try {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    UserStore.setWidth(window.innerWidth);

    // ログインのチェックもここで
  } catch (error) {
    console.debug("えらーです。。");
    // console.debug(error);
    // console.debug(UserStore.authUser);
    // return createError({
    //   statusCode: 500,
    //   message: "ユーザー情報の取得時にエラーが起きました。",
    // });
    // navigateTo("/");
  }
});
