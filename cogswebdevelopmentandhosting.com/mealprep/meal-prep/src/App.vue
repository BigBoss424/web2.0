<template>
  <v-app>
      <v-content transition="slide-x-transition">
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
    export default; {
        name: 'Meal-Prep'
    };
</script>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
