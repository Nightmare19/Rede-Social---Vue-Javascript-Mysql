<template>
<div id="registrar">
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="Nome"
            v-model="nome"
            :rules="[() => !!Nome || 'Este campo é obrigatório']"
            :error-messages="errorMessages"
            label="Nome"
            placeholder
            required
          ></v-text-field>
          <v-text-field
            ref="Email"
            v-model="email"
            :rules="[() => !!Email || 'Este campo é obrigatório']"
            :error-messages="errorMessages"
            label="Email"
            placeholder+
            required
          ></v-text-field>
          <v-text-field
            ref="Password"
            v-model="password"
            :rules="[() => !!Password || 'Este campo é obrigatório']"
            :error-messages="errorMessages"
            label="Password"
            placeholder
            required
          ></v-text-field>
          <v-text-field ref="Morada" v-model="morada" label="Morada" placeholder required></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on }">
                <v-btn icon class="my-0" @click="resetForm" v-on="on">
                  <v-icon>refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="Registar">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>


<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Registar",
  data() {
    return {
      input: {
        nome: "",
        email: "",
        password: "",
        morada: ""
      }
    };
  },
  methods: {
    Registar() {
      if (this.email != "" && this.password != "") {
        let data = {
          email: this.email,
          password: this.password,
          morada: this.morada,
          nome: this.nome
        };
        axios
          .post("/api/registar", data)
          .then(response => {
            console.log("Conta criada");
            router.push("/home");
          })
          .catch(errors => {
            alert(errors.response.data[2].message);
          });
      } else {
        console.log("Conta ja existe!!");
      }
    }
  }
};
</script>

<style scoped>
#registrar {
  background-image: url(https://microsofters.com/wp-content/uploads/2016/11/Seguridad.jpg);
  width: 1500px;
  height: 800px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
}
</style>
