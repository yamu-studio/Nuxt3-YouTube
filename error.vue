<template>
  p a
  <!-- <template lang="pug"></template>
#home
  .container
    //- h5 今週のチャレンジ
    h5 Loading中
     -->
</template>

<script setup lang="ts">
const error = useError();
// const UserStore = useUserStore();

console.log(error.value.message);

// await navigateTo("");
onMounted(() => {
  // console.log(error.value.message);
  // console.log(UserStore.authUser);
  navigateTo("");
});
</script>

<style scoped lang="scss"></style>
