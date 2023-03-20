<template>
    <header>
        <img alt="main-logo" class="logo" src="@/assets/star.svg" width="125" height="125" />

        <div class="text-red-900">
            <HelloWorld msg="in msg" />
            <nav>
                <RouterLink to="/">主页</RouterLink>
                <RouterLink to="/user">用户</RouterLink>
            </nav>
        </div>
    </header>
</template>
  
<style></style>
  