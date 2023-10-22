import {defineStore} from 'pinia'
import {useApiFetch} from "~/composable/auth.js";


export const useAuthStore = defineStore('auth', {

    state: () => ({
        id: '',
        full_name: '',
        email: '',
        isLoggedIn: false,
    }),

    actions: {
        async login(credentials) {
            await useApiFetch("/sanctum/csrf-cookie");

            await useApiFetch("/login", {
                method: 'POST',
                body: credentials,
            }).then(({data}) => {
                // this.fetchUser();
            });

        },

        async fetchUser() {
            const {data, error} = await useApiFetch("/api/user");
            this.$state = data.value;
            this.$state.isLoggedIn = true;


        },

        logout() {
            useApiFetch("/logout", {method: "POST"})
                .then(({data}) => {
                    this.$state.isLoggedIn = false;
                    console.log(this.$state.isLoggedIn
                    )
                });
        }
    },


})