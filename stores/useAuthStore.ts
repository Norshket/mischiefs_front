import {defineStore} from 'pinia'
import {useApiFetch} from "~/composable/useApiFetch";

type User = {
    id: number,
    name: string,
    email: string,
}

type Credential = {
    email: string,
    password: string,
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isLoggedIn = computed(() => !!user.value)

    async function fetchUser() {
        const {data, error} = await useApiFetch("/api/user")
        user.value = data.value as User
        console.log(error)
    }


    async function login(credentials: Credential) {
        await useApiFetch("/sanctum/csrf-cookie")

        const login = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        })

        await fetchUser();

        return login;
    }


    return {user, login, isLoggedIn, fetchUser};

})