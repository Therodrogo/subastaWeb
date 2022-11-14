<template>
    <div class="hidden">

        <vs-sidebar absolute hover-expand reduce v-model="active" open>
            <template #logo>

            </template>
            <vs-sidebar-item id="crearUsuario">
                <template #icon>
                    <span class="material-icons-outlined">
                        person_add
                    </span>
                </template>
                Crear usuario
            </vs-sidebar-item>
            <vs-sidebar-item id="listaUsuario">
                <template #icon>
                    <span class="material-icons-outlined">
                        contacts
                    </span>
                </template>
                Lista de Usuarios
            </vs-sidebar-item>
            <vs-sidebar-item id="crearProductos">
                <template #icon>
                    <span class="material-icons-outlined">
                        local_offer
                    </span>
                </template>
                Crear Productos
            </vs-sidebar-item>
            <vs-sidebar-item id="listaSubasta">
                <template #icon>
                    <span class="material-icons-outlined">
                        gavel
                    </span>
                </template>
                Lista de subasta
            </vs-sidebar-item>
            <div @click="cerrarSesion">
                <vs-sidebar-item id="cerrarSesion">
                    <template #icon>
                        <span class="material-icons-outlined">
                            logout
                        </span>
                    </template>
                    Cerrar Sesion
                </vs-sidebar-item>
            </div>
        </vs-sidebar>
        <div v-if="active == 'crearUsuario'">
            <CrearUsuario />
        </div>
        <div v-if="active == 'listaUsuario'">
            <ListaUsuario />

        </div>
        <div v-if="active == 'crearProductos'">
            <CrearSubasta />

        </div>
        <div v-if="active == 'listaSubasta'">
            <ListaSubastasAdmin />
        </div>

    </div>
</template>
<script>
import CrearSubasta from '@/components/CrearSubasta.vue';
import CrearUsuario from '@/components/CrearUsuario.vue';
import ListaUsuario from '@/components/ListaUsuario.vue';
import ListaSubastasAdmin from '@/components/ListaSubastasAdmin.vue';

export default {
    data: () => ({
        active: "crearUsuario",
    }),
    beforeMount() {

        if (this.$store.state.usuarioLogeado.userName == null) {
            this.$router.push({ path: '/' })
        }
    },
    components: { CrearUsuario, ListaUsuario, CrearSubasta, ListaSubastasAdmin },
    methods: {
        cerrarSesion() {
            this.$router.push({ path: '/' })
        }
    },
}
</script>

<style>
.hidden {
    display: flex;

    justify-content: center;
}
</style>