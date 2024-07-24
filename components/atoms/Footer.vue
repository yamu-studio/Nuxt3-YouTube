<template lang="pug">
.Footer 
  .content-row-space-around#termsComp
    NuxtLink(to="'/top'") Top 
  p.title.is-6.has-text-white.has-text-centered.p-3 Copyright © 2024 〜〜〜 All Rights Reserved.
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.Footer {
  background-color: black;
  color: white;
}
#termsComp {
  a {
    color: #c9daff;
  }

  a:link {
    color: #c9daff;
  }
  a:hover {
    color: #ff7d7d;
  }
  a:active {
    color: #ffa64d;
  }
  a,
  p {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    font-size: 0.75rem !important;
  }
}
</style>
