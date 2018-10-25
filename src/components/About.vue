<template>
        <v-data-table
                :headers="headers"
                :items="Object.assign([],$store.state.rosterSettings)"
                class="elevation-1"
        >
                <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
                                <span>
          {{ props.header.text }}
        </span>
                        </v-tooltip>
                </template>
                <template slot="items" slot-scope="props">
                        <td>{{ props.item['employeecode'] }}</td>
                        <td>{{ props.item['department'] }}</td>
                        <td>{{ props.item['shifthours'] }}</td>
                        <td v-for="weekday in weekdays" :key="weekday">
                                <span @click="changeStatus($event)" :title="props.item[weekday].title" :data-id="props.item[weekday].id" class="roster-weeks-labels" :style="{'background-color':props.item[weekday].color}">
                                        {{ props.item[weekday].code }}
                                </span>
                        </td>
                </template>
        </v-data-table>
</template>

<script>
    export default {
        name: "About",
        data () {
            return {
                headers: [
                    {
                        text: 'Employee Code',
                        align: 'left',
                        value: 'employeecode'
                    },
                    { text: 'Department', value: 'department' },
                    { text: 'Shift Hours', value: 'shifthours' },
                    { text: 'Monday', value: 'w1', sortable: false },
                    { text: 'Tuesday', value: 'w2', sortable: false },
                    { text: 'Wednesday', value: 'w3', sortable: false },
                    { text: 'Thursday', value: 'w4', sortable: false },
                    { text: 'Friday', value: 'w5', sortable: false },
                    { text: 'Saturday', value: 'w6', sortable: false },
                    { text: 'Sunday', value: 'w7', sortable: false }
                ],
                weekdays:['w1','w2','w3','w4','w5','w6','w7'],
                increment : 1
            }
        },
        beforeMount(){
        },
        mounted(){
            this.$store.dispatch('getRosterSettings');
            this.$store.dispatch('getStatuses');
        },
        methods:{
            changeStatus(event){
                let current_status_id = event.target.getAttribute('data-id')
                let statuses = this.$store.state.statuses
                statuses.forEach((element,index) => {
                    if(parseInt(element.id) === parseInt(current_status_id)){
                        this.increment = index + 1
                        if(statuses.length == this.increment)
                            this.increment = 0
                    }
               })
                event.target.innerHTML = statuses[this.increment].code;
                event.target.setAttribute('data-id',statuses[this.increment].id);
                event.target.setAttribute('title',statuses[this.increment].title);
                event.target.style.backgroundColor = statuses[this.increment].color
            }
        }
    }
</script>

<style scoped>
        .elevation-1{
                width: 76%;
                float: right;
        }
        .roster-weeks-labels{
                padding: 2px;
                border-radius: 5px;
                text-align: center;
                width: 28px;
                display: inline-block;
                cursor: pointer;
        }
</style>