<template>
    <v-navigation-drawer
            :mini-variant.sync="mini"
            v-model="drawer"
            hide-overlay
            stateless
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn
                                icon
                                @click.stop="mini = !mini"
                        >
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    :to="item.url"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Navbar",
        data () {
            return {
                drawer: true,
                items: [
                    {
                        title: 'Home',
                        icon: 'dashboard',
                        url:'/',

                    },
                    {
                        title: 'Roster',
                        icon: 'question_answer',
                        url:'/about'
                    }
                ],
                mini: false,
                right: null
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    a{
        color:#000;
    }
    a:hover{
        color:white;
    }
    li{
        margin-right: 10px;
    }
    li.router-link-exact-active a{
        color:white;
    }
    aside{
        float: left;
    }
</style>