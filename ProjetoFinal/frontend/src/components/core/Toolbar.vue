<template>
  <v-toolbar app flat>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer"/>
    <v-container mx-auto py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="80"
          width="100"
          max-width="200"
        />
        <v-btn color="primary" flat to="/">Home</v-btn>
        <v-btn color="primary" flat to="/login">Login</v-btn>
        <v-btn color="primary" flat to="/registar">Registar</v-btn>
        <v-spacer/>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>


