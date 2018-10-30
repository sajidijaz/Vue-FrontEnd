<template>
    <section>
        <HeaderBar />
        <Navbar />
            <section class="main-content pa-3">
                <slot />
            </section>
        <Footer />
        <Dialog />
    </section>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'
    import HeaderBar from '@/components/HeaderBar'
    import Dialog from '@/components/Dialog';
    export default {
        name: "Default",
        components:{Navbar, Footer, HeaderBar, Dialog},
        mounted(){

        }
    }
</script>

<style scoped>

</style>