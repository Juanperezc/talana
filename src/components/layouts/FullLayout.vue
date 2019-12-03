<template>
  <v-app>
   
    <NavigationDrawer />
     <v-content>
        <NavBar />
        <v-container class="grey lighten-5" fluid="fluid" fill-height="fill-height">
          <router-view></router-view>
        </v-container>
           <v-footer class="justify-center pl-0" inset app>
      <span>&copy; 2018</span>
    </v-footer> 
      </v-content>
  </v-app>
</template>
<script>
import { NavBar, NavigationDrawer } from "../sections";
export default {
  name: "FullLayout",
  components: {
    NavBar,
    NavigationDrawer
  }
};
</script>