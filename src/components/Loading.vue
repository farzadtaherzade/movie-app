<template>
  <div class="loading"><span></span></div>
</template>
<script setup></script>
<style lang="scss" scoped>
.loading {
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes circel-loading {
    to {
      transform: rotateZ(360deg);
    }
  }
  span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #fff;
    animation: circel-loading 1200ms ease infinite;
  }
}
</style>
