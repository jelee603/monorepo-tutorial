<template>
  <div>
    <div class="hello">
      <my-button>It Works!</my-button>
      <my-button>😀 😎 👍 💯</my-button>
    
    </div>
    <my-table :values="msg" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>