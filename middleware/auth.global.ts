export default defineNuxtRouteMiddleware(async (from, to) => {
  const UserStore = useUserStore()

  try {
    const response = await $fetch('http://127.0.0.1:8000/youtube/users/me', {
      headers: {
        Authorization: UserStore.authToken,
      },
    })

    // console.log(response)
    UserStore.setAuthUser(response.user)
    UserStore.setAuthChannel(response.channel)
  } catch (error) {
    console.log(error)
  }
})
