<template>

  <v-navigation-drawer
    app
    v-model="drawer"
   
    :mini-variant.sync="mini"
    class="custom_overlay"
    hide-overlay
    stateless
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"> </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
         Usuario
        </v-list-item-content>
      </v-list-item>

      <v-list-item link two-line>
     <!--    <v-list-item-content>
          <v-list-item-title class="title">Sandra Adams</v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action> -->
             <h3>Categorias</h3>
      </v-list-item>
    </v-list>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="setCategory(item)"
          link
        >

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>
<script>
import { CategoryService } from '../../services'
export default {
  name: "NavigationDrawer",

  data() {
    return {
      drawer: true,
      mini: false,
      /*   drawer: document.body.clientWidth > 1262 ?  store.commit('boolDrawer', true) :  store.commit('boolDrawer', false), */
      items: [
       /*  { title: "Home", icon: "mdi-home-city", route: "/dashboard" },
        { title: "My Account", icon: "mdi-account", route: "/dashboard"},
        { title: "Tables", icon: "mdi-account-group-outline", route: "/dashboard/table" } */
      ]
    };
  },
  methods: {
    setCategory(item){
      this.$store.commit('changeCategory',item.name)
/*       console.log(item);
  this.$router.push({
    name: 'Dashboard', 
    params: { errors: '123' }
    }); */
    }
  },
  computed: {
    /* drawer() {
      return this.$store.state.drawer;
    } */
  },
   watch: {
   /*  drawer (newCount) {
      // Our fancy notification (2).
      console.log(`We have ${newCount} fruits now, yaay!`)
    } */
  },
  created() {
  },
  mounted() {
    CategoryService.index().then((res) => {
      console.log('res', res);
      this.items = res.data
    });
    this.$store.subscribe((mutation, state) => {
      this.drawer = state.drawer;
    });
    window.addEventListener("resize", () => {
     /*  if (document.body.clientWidth > 1262) {
        this.$store.commit("boolDrawer", true);
      } else {
        this.$store.commit("boolDrawer", false);
      } */
    });
  }
};
</script>
<style scoped>
.custom_overlay {
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #FFFFFF;
  z-index: 2;
}
</style>