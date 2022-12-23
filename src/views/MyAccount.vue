<script>
import { defineComponent } from "vue";
import { createUser } from "@/api/BDD/Users/users-api";
export default defineComponent({
  name: "MyAccount",
  setup() {
    return {
      createUser,
    };
  },
});
</script>
<template>
  <div class="all-concerts">Mon compte</div>
  <button @click="createUser">test</button>
</template>

<style lang="scss"></style>
