<template>
    <div id="background">
        <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="email" placeholder="Username" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login/</button>
        <button type="button" v-on:click="Registar()">Registar</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import router from "../router";
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.email != "" && this.password != "") {
                    let data = {
                        email: this.email,
                        password: this.password--
                    };
                    axios
                    .post("/api/login", data)
                    .then(response => {
                        console.log("Logged in");
                        router.push("/profile")
                    })
                    .catch(errors => {
                        alert(errors.response.data[2].message)
                    });
                } else {
                    console.log("A username and password must be present");
                }
            },
            Registar(){
                router.push("/registar")

            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    #background {
        background-image: url(https://thumbs.dreamstime.com/t/login-special-blue-banner-background-abstract-illustration-124712395.jpg);
        width: 500px;
        height: 500px;
        margin: auto;
        margin-top: 100px;
        padding: 20px;
    }
</style>