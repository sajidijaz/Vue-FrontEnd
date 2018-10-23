<template>
    <section>
        <Navbar />
            <section class="main-content pa-3">
                <slot />
            </section>
        <Footer />
    </section>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'
    export default {
        name: "Default",
        components:{Navbar, Footer}
    }
</script>

<style scoped>

</style>