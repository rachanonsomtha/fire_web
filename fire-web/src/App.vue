<template>
<v-app style="background-color: #f2f2f2">
    <Navbar />
    <v-content>
        <router-view></router-view>
    </v-content>
</v-app>
</template>



<script>


import Navbar from './components/Navbar'
// import {
//     axios
// } from '@/plugins/axios'

export default {
    name: 'App',
    components: {
        Navbar
    },
    data() {
        return {
            //
        }
    },
    created() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'http://api.longdo.com/map/?key=f2bddf86de431afd35f6f7db32664ea1')
        document.head.appendChild(recaptchaScript)

      
    },
    mounted() {

        



        
    },
    methods: {
        
    }
}
</script>



