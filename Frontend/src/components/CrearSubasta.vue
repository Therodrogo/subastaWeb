<template>
    <div class="hidden">

        <div class="titulo">
            <h3>Crear subasta</h3>
        </div>

        <vs-row justify="center">
            <div class="contenedor">



                <vs-input label="Nombre del Producto" v-model="subasta.nameProducto" />


                <vs-input label="Monto Inicial" v-model="subasta.montoInicial" />
                <vs-input label="Duración" @keyup.enter="agregarsubasta" v-model="subasta.tiempo" />
                <vs-button @click="agregarsubasta">Crear subasta</vs-button>
            </div>


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
            subasta: {
                nameProducto: "",
                estado:"activo",
                montoInicial: "",
                montoFinal: "",
                tiempo: ""
            },
        }
    },
    methods: {
        agregarsubasta() {

            if (this.subasta.montoInicial != "" && this.subasta.nameProducto != "" && this.subasta.tiempo != "") {
                if (this.subasta.pass == this.passConfirmar) {
                    this.axios.post('/nuevo-subasta', this.subasta)
                        .then(res => {
                            this.subasta.nameProducto = ""
                            
                            this.subasta.montoInicial = ""
                            this.subasta.tiempo = ""
                            this.openNotification("success", "Exito", "Nueva subasta agregado")
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
.contenedor{
    display: flex;
    flex-direction: column;
}
</style>