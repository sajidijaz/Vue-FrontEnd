<template>
    <v-layout>
        <v-flex xs12 sm4 offset-sm4 pt-5>
            <v-form ref="form" v-model="valid" class="grey lighten-3 pa-3" lazy-validation>
                <v-flex xs12 sm12>
                    <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            :counter="10"
                            label="Username"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                    <v-text-field
                            :append-icon="show3 ? 'visibility_off' : 'visibility'"
                            v-model="password"
                            :rules="[rules.required, rules.min]"
                            :type="show3 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password"
                            hint="At least 8 characters"
                            value=""
                            class="input-group--focused"
                            @click:append="show3 = !show3"
                    ></v-text-field>
                </v-flex>
                <v-btn
                        :disabled="!valid"
                        @click="submit"
                >
                    submit
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                valid: true,
                username: '',
                usernameRules: [
                    v => !!v || 'Username is required',
                    v => (v && v.length <= 10) || 'Username must be less than 10 characters'
                ],
                show3: false,
                password: '',
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters'
                }
            }
        },

        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    let data = {
                        username : this.username,
                        password: this.password
                    }

                    this.$store.dispatch('login',data).then((response)=>{
                        this.$cookies.set('logged_in','CF80CD8AED482D5D1527D7DC72FCEFF84E6326592848447D2DC0B0E87DFC9A90');
                        // commit('setStatus',response.data);
                    });

                    // Native form submission is not yet supported
                    // axios.post('/api/submit', {
                    //     name: this.name,
                    //     email: this.email,
                    //     select: this.select,
                    //     checkbox: this.checkbox
                    // })
                }
            }
        }
    }
</script>

<style scoped>

</style>