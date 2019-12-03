<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in items" :key="index" mb-2>
        <v-card>
          <v-img :src="item.photo" aspect-ratio="1">
            <div class="stock">
              <v-card v-if="item.stock > 0">Disponible</v-card>
              <v-card v-if="item.stock == 0">Sin Stock</v-card>
            </div>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h2>{{item.name}}</h2>
              <div>precio : {{item.price}}$</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <integer-plusminus :min="0" :max="item.stock" :step="1" v-model="item.ipm_value">
              {{ item.ipm_value }}
              <template slot="decrement">-</template>
              <template slot="increment">+</template>
            </integer-plusminus>
            <v-btn text color="green" @click="onClick(item)">Agregar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Producto Agregado</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-img :src="item_dialog.photo" aspect-ratio="1"></v-img>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <h4>Nombre del producto: {{item_dialog.name}}</h4>
                <h4>Codigo del producto:{{item_dialog.code}}</h4>
                <h4>Precio del producto: {{item_dialog.price}}</h4>
                <h4>
                  Cantidad:
                  <integer-plusminus
                    :min="0"
                    :max="item_dialog.stock"
                    :step="1"
                    v-model="item_dialog.ipm_value"
                  >
                    {{ item_dialog.ipm_value }}
                    <template slot="decrement">-</template>
                    <template slot="increment">+</template>
                  </integer-plusminus>
                </h4>
                <h4>Sub-total: {{subTotalItem }}</h4>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Seguir comprando</v-btn>
          <v-btn color="blue darken-1" text @click="onAdd()">Agregar al carro</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { AlertService, ProductService } from "../../services";
import { IntegerPlusminus } from "vue-integer-plusminus";

export default {
  components: { IntegerPlusminus },
  data() {
    return {
      form: {
        ipm_value: 0
      },
      search: null,
      dialog: false,
      wholeResponse: [],
      items: [],
      category_select: null,
      itemsAll: [],
      loading: true,
      item_dialog: {}
    };
  },
  methods: {
    loadAllProducts() {
      ProductService.index().then(res => {
        res.data.forEach(element => {
          element.ipm_value = 0;
        });
        this.items = res.data;
        this.itemsAll = res.data;
        console.log("this item", this.items);
        this.loading = false;
      });
    },
    filter() {
      console.log("res", this.items);
      if (this.search == null || this.search == "") {
        this.items = this.itemsAll;
      } else {
        this.items = this.items.filter(item => {
          return (
            item.name.includes(this.search) ||
            item.category.name.includes(this.search)
          );
        });
      }
      if (this.category_select != null) {
          this.items = this.items.filter(item => {
          return (
            item.category.name.includes(this.category_select)
          );
        });
      }
    },
    onAdd() {
      if (this.item_dialog.ipm_value > 0) {
        this.item_dialog.quantity = this.item_dialog.ipm_value;
        this.$store.commit("pushItemToPay", this.item_dialog);
        this.dialog = false;
      } else {
        AlertService.error("Debe seleccionar mas de un articulo");
      }
    },
    onClick(item) {
      if (item.stock > 0) {
        if (item.ipm_value > 0) {
          this.dialog = true;
          this.item_dialog = item;
        } else {
          AlertService.error("Debe seleccionar mas de un articulo");
        }
      } else {
        AlertService.error("No hay stock disponible!");
      }

      /*  AlertService.info(); */
    }
  },
  computed: {
    subTotalItem() {
      return this.item_dialog.price * this.item_dialog.ipm_value;
    }
  },
  created() {
    this.loadAllProducts();
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      this.category_select = state.category_select;
      this.search = state.search;
      console.log("search", this.search);
      this.filter();
    });
  }
};
</script>
<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}

.stock {
  position: absolute;
  bottom: 0;
}
</style>