<template>

<v-app-bar  color="primary" app><!-- class=" d-lg-none" -->
   <v-app-bar-nav-icon  @click.stop="changeDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title><img src="https://talana.com/static/www/images/logo-talana-blanco.png" width="70%"/></v-toolbar-title>

      <v-spacer></v-spacer>

       <v-row 
        align="center"
        style="max-width: 650px"
   
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Buscar..."
           v-model="searchInput"
          @input="search()"
          single-line
          color="white"
          hide-details
        />
      </v-row>
      <template v-if="$vuetify.breakpoint.smAndUp">
     
       
      </template>
      <v-row justify="center">
    <v-dialog v-model="dialog"  max-width="600px">
      <template v-slot:activator="{ on }">
        
        <v-btn color="primary" dark v-on="on">  <v-badge  color="red">
      <template v-slot:badge v-if="items_to_pay.length > 0">{{items_to_pay.length}}</template>
      <v-icon>mdi-cart</v-icon>
    </v-badge></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Resumen de compra</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row      v-for="item in items_to_pay"
        v-bind:key="item.id">
              <v-col cols="12" sm="6" md="12">
                Nombre del producto: {{item.name}}
              </v-col>
              <v-col cols="12" sm="6" md="4">
                Precio: {{item.price}}$
                 <integer-plusminus
                    :min="0"
                    :max="item.stock"
                    :step="1"
                    v-model="item.ipm_value"
                  >
                    {{ item.ipm_value }}
                    <template slot="decrement">-</template>
                    <template slot="increment">+</template>
                  </integer-plusminus>
                   Sub-total: {{subTotalItem(item)}}$
              </v-col>

            </v-row>
            <v-row>
              Total: {{total()}}
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
       
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
import { IntegerPlusminus } from "vue-integer-plusminus";
export default {
      components: { IntegerPlusminus },
      name: "NavBar",
      data: () => ({
      group: null,
      searchInput: null,
      dialog: false,
       }),
    methods: {
      changeDrawer(){
        console.log('changeDrawer')
        this.$store.commit("changeDrawer");
      },
      search(){
        console.log(this.searchInput);
        if (this.searchInput == ""){
          this.searchInput = null
        }
       this.$store.commit("changeSearch", this.searchInput);
      },
       subTotalItem(item) {
      return item.price * item.ipm_value;
     } ,
      total() {
       let acum=0;
      this.items_to_pay.forEach(element => {
        acum += element.price * element.ipm_value;
      });
      return acum;
     } 
    },
      computed: {
     items_to_pay() {
      return this.$store.state.items_to_pay;
    }
  },
   watch: {
     items_to_pay (newVal) {
      console.log(`We have ${newVal} now!`)
    }
  }
}
</script>