<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Name"
                    :value="this.user.nome"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Email"
                    class="purple-input"
                    :value="this.user.email"
                    />
                    
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                  <v-text-field
                    label="Morada"
                    class="purple-input"
                    :value="this.user.morada"
                    />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="Sobre mim"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">Joaquim</h4>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      user: {
        nome: "Offline"
      }
    }
  },
  methods:{
    carregarPerfil: function () {
      let self= this
      axios
      .get("/api/perfil")
      .then(response => {
        console.log(response)
        self.$set(this, "user", response.data);
      })
      .catch(err =>{
        console.log(err.response)
      })
    }
  },
  mounted(){
    this.carregarPerfil();
  }
}
</script>