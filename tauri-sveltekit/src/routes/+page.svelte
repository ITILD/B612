<script>
  import Greet from "$lib/Greet.svelte";
</script>

<h1>tauri</h1>

<div class="row">
  <a href="https://tauri.app" target="_blank" rel="noreferrer">
    <img src="/temp/tauri.svg" class="logo tauri" alt="Tauri Logo" />
  </a>
  <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
    <img src="/temp/svelte.svg" class="logo svelte" alt="Svelte Logo" />
  </a>
</div>

<p>Click on the Tauri</p>

<div class="row">
  <Greet />
</div>
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
<h1 >
  Hello world1!
</h1>

<style lang="postcss">
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
  
  :global(html) {
    background-color: theme(colors.red.100);
  }

  .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.row {
  display: flex;
  justify-content: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

h1 {
  text-align: center;
}

input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
}

button:hover {
  border-color: #396cd8;
}

input,
button {
  outline: none;
}

#greet-input {
  margin-right: 5px;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }

  input,
  button {
    color: #ffffff;
    background-color: #0f0f0f98;
  }
}

</style>