<template>
  <v-app>
    <v-navigation-drawer floating permanent :border="20">
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-google-maps"
          title="Google Maps"
          subtitle="Vuetify"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-bookmark" title="Saved"></v-list-item>
        <v-list-item prepend-icon="mdi-map-marker" title="Recent"></v-list-item>
        <v-list-item
          prepend-icon="mdi-crosshairs-gps"
          title="Current Location"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"> <v-container fluid></v-container></v-main>
    <v-footer app>
      <v-row justify="center" style="padding: 10px">
        {{ new Date().getFullYear() }}
      </v-row>
    </v-footer>
  </v-app>
</template>
