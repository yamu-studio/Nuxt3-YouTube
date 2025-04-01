<template lang="pug">
.hero.is-medium
  .hero-body
    .notification
      p.title ロゴ
      .columns
        .column.is-half
          p.title アカウント名
          .select.is-rounded.is-small
            select
              option {{mailAddress}}
              option メールアドレス２
        .column
          input.input.mb-2(:type="isShowPassword ? 'text' : 'password'" placeholder="パスワードを入力" v-model="password")
          label.checkbox
            input(type="checkbox" v-model="isShowPassword")
            | パスワードを表示する
          p.has-text-danger(v-if="errorMessage") {{ errorMessage }}
      .buttons.is-justify-content-end
        button.button.is-ghost.is-rounded パスワードをお忘れの場合
        button.button.is-link.is-rounded(@click="login") 次へ
    .content-row-space-between
      .select.is-small
        select
          option 日本語
          option English
      .buttons
        button.button.is-text.is-small.is-rounded ヘルプ
        button.button.is-text.is-small.is-rounded プライバシー
        button.button.is-text.is-small.is-rounded 規約

</template>

<script setup lang="ts">
definePageMeta({
  layout: "login-layout",
});

const route = useRoute();
const { mailAddress } = route.query;

const password = ref("");
const isShowPassword = ref(false);
const errorMessage = ref("");

async function login() {
  if (!password.value) {
    errorMessage.value = "パスワードを入力してください。";
    return;
  }
  try {
    const response = await $fetch(`http://127.0.0.1:8000/youtube/login`, {
      method: "POST",
      body: {
        email: mailAddress,
        password: password.value,
      },
    });

    alert("ログイン成功！");
    // console.log(response);

    const UserStore = useUserStore();
    UserStore.setAuthToken(response.token);

    navigateTo("/");
  } catch (err) {
    console.error("ログインエラー:", err);
    errorMessage.value = "ログインに失敗しました。";
  }
}
</script>

<style scoped></style>
