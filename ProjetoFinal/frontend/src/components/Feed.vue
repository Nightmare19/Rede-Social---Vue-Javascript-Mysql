<template>
  <div id="landing-page">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <v-container id="about" tag="section">
            <base-subheading>Bem-vindo á Universidade</base-subheading>
            <p>Este é o site onde os utilizadores podem fazer o seu registo na rede social, tendo a sua página de perfil onde consta as suas informações pessoais que pretendem que seja visível.</p>
          </v-container>
          <v-container id="publicacao">
            <base-subheading>Acesso ao Ensino Superior para Maiores de 23 anos</base-subheading>
            <p>
              Calendário Geral das Provas
              <br>
              --- Sessões públicas de esclarecimentos aos interessados: 28 fevereiro e 30 de abril de 2019, às 19h, no Campus da Penteada (Sala do Senado)  ---
              <br>
              --- Período de inscrição: 1 de abril a 13 de maio de 2019 ---
              <br>
              --- Realização das provas de conhecimentos e competências: 11 a 14 de junho de 2019 , no Campus da Penteada (Sala a anunciar) ---
              <br>
              --- Afixação dos resultados das provas de conhecimentos e competências: até 21 de junho de 2019 ---
              <br>
              --- Afixação dos resultados da apreciação curricular: até 28 de junho de 2019 ---
              <br>
              --- Realização da entrevista: 3 e 4 de julho de 2019 , no Campus da Penteada (Sala a anunciar)  ---
              <br>
              --- Afixação da classificação final: até 5 de julho de 2019 ---
              <br>
              --- Recursos: Até dois dias úteis, contados da data de publicação dos resultados de cada componente de avaliação, no Campus da Penteada (Gabinete de Apoio ao Estudante)  ---
              <br>
              Mais informações acerca das provas são disponibilizadas aqui
            </p>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
#landing-page {
  background-image: url("./img/uni.jpg");
  background-color: whitesmoke;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
#about {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
}
#publicacao {
  width: 5000px;
  border: 30px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 250px;
  padding: 20px;
}
</style>