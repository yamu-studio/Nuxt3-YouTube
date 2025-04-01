<template lang="pug">
.hero.is-medium
  .hero-body
    .notification
      p.title ロゴ
      .columns
        .column.is-half
          p.title ログイン
          p.subtitle YouTube に移動
        .column
          input.input.mb-2(type="text" placeholder="メールアドレスまたは電話番号" v-model="mailAddress")
          NuxtLink メールアドレスを忘れた場合
          p.help.mt-6 ご自分のパソコンでない場合は、シークレット ブラウジング ウィンドウを使用してログインしてください。
            NuxtLink ゲストモードの使い方の詳細
      .buttons.is-justify-content-end
        button.button.is-ghost.is-rounded アカウントを作成
        button.button.is-link.is-rounded(@click="gePassword") 次へ
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

const mailAddress = ref("");
function gePassword() {
  if (mailAddress.value == "") {
    return alert("空欄です。");
  }

  navigateTo({
    path: "/signin/challenge/pwd",
    query: {
      mailAddress: mailAddress.value,
    },
  });
}
</script>

<style scoped></style>
