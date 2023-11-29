<template lang="pug">
#app
  Header.header
  main.page-content
    slot 
  SideMenu.sidebar
  
    
</template>

<style lang="scss">
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.page-content {
  position: relative;
  left: 68px;
  max-width: 92vw;
  padding-top: 70px;
  // min-height: 92vh;
}
.header {
  position: fixed;
}
.sidebar {
  position: fixed;
  top: 70px;
  order: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  // display: flex;
  // justify-content: space-between;
}
</style>
