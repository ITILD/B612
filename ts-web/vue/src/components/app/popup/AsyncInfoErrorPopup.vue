// LoginPopup.vue
<template>
    <div class="popup">
        <div class="content">
            <h4> Login to your account </h4>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button> Log in </button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.popup {
    position: fixed;
    width: 100%;

    height: 100%;

}

.content {
    min-width: 200px;
    width: 30%;
    background: #fff;
    height: 200px;
    padding: 10px;
    border-radius: 5px;
}

input[type="text"],
input[type="password"] {

    border-bottom: 1px solid #eee;
    width: 80%;
    margin: auto;
    font-size: 0.5em;
}

button {
    margin-top: 50px;
    background-color: #8e44ad;
    color: #fff;
    padding: 5px 10px;
    font-size: 0.5em;
}
</style>
