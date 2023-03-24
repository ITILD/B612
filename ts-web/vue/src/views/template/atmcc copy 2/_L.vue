<template>
  <div class="test">
    <h1>usr-main</h1>
    <nav>
      <RouterLink to="/user">LogIn</RouterLink>
      <RouterLink to="/user/signup">SignUp</RouterLink>
    </nav>
    <RouterView style="background-color: gray;"/>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
@media (min-width: 1024px) {
  .test {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  