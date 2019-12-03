<template>

<v-app-bar  color="primary" app>
   <v-app-bar-nav-icon class=" d-lg-none" @click.stop="changeDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title><img src="https://talana.com/static/www/images/logo-talana-blanco.png" width="70%"/></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text >Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
</v-app-bar>



  <!--    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
 -->
    
</template>
<script>
export default {
      name: "NavBar",
      data: () => ({
      group: null,
       }),
    methods: {
      changeDrawer(){
        console.log('changeDrawer')
        this.$store.commit("changeDrawer");
      }
    },
    watch: {
    }

}
</script>