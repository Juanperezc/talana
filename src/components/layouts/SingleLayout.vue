<template>
  <v-app>
     <v-content>
        <v-container class="grey lighten-5" fluid="fluid" fill-height="fill-height">
          <router-view></router-view>
        </v-container>
      </v-content>
  </v-app>
</template>
<script>

export default {
  name: "SingleLayout",
  components: {
  }
};
</script>