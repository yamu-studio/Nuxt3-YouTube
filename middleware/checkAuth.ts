export default defineNuxtRouteMiddleware((from, to) => {
  const UserStore = useUserStore();

  try {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    UserStore.setWidth(window.innerWidth);
  } catch (error) {
    console.debug("Error");
  }
});
