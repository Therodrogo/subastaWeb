<template>
    <div class="hidden">

        <div class="titulo">
            <h3>Crear un nuevo usuario</h3>
        </div>

        <vs-row justify="center">
            <vs-col w="6">

                <vs-input label="Nombre de usuario" v-model="usuario.userName" />


                <vs-input label="Contraseña" v-model="usuario.pass" type="password" />

                <vs-input  label="Confirme Contraseña" @keyup.enter="agregarusuario" v-model="passConfirmar" type="password" />
                <vs-button @click="agregarusuario">Crear Usuario</vs-button>
            </vs-col>
            <vs-col class="rol" w="6">
                <vs-select label="Rol" placeholder="Rol" v-model="usuario.rol">
                    <vs-option label="Cliente" value="Cliente">
                        Cliente
                    </vs-option>
                    <vs-option label="Admin" value="Admin">
                        Admin
                    </vs-option>

                </vs-select>

            </vs-col>
            <vs-row>

            </vs-row>
        </vs-row>





    </div>
</template>

<script>

export default {
    data() {

        return {
            value: "",
            usuario: {
                userName: "",
                pass: "",
                rol: ""
            },
            passConfirmar: ""
        }
    },
    methods: {
        agregarusuario() {

            if (this.usuario.pass != "" && this.usuario.userName != "" && this.usuario.rol != "") {
                if (this.usuario.pass == this.passConfirmar) {
                    this.axios.post('/nuevo-usuario', this.usuario)
                        .then(res => {
                            this.usuario.userName = ""
                            this.usuario.pass = ""
                            this.usuario.rol = ""
                            this.passConfirmar = ""
                            this.openNotification("success", "Exito", "Nueva usuario agregado")
                        })
                        .catch((e) => {
                            console.log(e);

                        })
                }
                else {
                    this.openNotification("danger", "Error", "Las contraseñas no coinciden.")

                }

            }
            else {
                this.openNotification("danger", "Error", "Falta informcion.")

            }


        },
        openNotification(color, titulo, texto) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position: "top-right",
                title: titulo,
                text: texto
            })
        }

    },

}
</script>

<style scoped>
.hidden {
    display: flex;
    flex-direction: column;
}

.vs-input-parent {
    padding: 10px;
}

.rol {
    padding: 9px 0 0 0;
}
</style>