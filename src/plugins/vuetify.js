import Vue from 'vue';
import Vuetify from 'vuetify/lib';
/* import colors from 'vuetify/lib/util/colors' */
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#0BB3D7', //colors.red.darken1, // #E53935
            secondary: '#FC9B02',  //colors.red.lighten4, // #FFCDD2
            accent: '#FAFAFA'//colors.indigo.base, // #3F51B5
          },
        },
      }
});
