<template>
        <v-data-table
                :headers="headers"
                :items="desserts"
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
                        <td>{{ props.item.employeecode }}</td>
                        <td>{{ props.item.department }}</td>
                        <td>{{ props.item.shifthours }}</td>
                        <td :title="props.item.w1.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w1.color}">{{ props.item.w1.code }}</span></td>
                        <td :title="props.item.w2.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w2.color}">{{ props.item.w2.code }}</span></td>
                        <td :title="props.item.w3.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w3.color}">{{ props.item.w3.code }}</span></td>
                        <td :title="props.item.w4.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w4.color}">{{ props.item.w4.code }}</span></td>
                        <td :title="props.item.w5.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w5.color}">{{ props.item.w5.code }}</span></td>
                        <td :title="props.item.w6.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w6.color}">{{ props.item.w6.code }}</span></td>
                        <td :title="props.item.w7.title"><span class="roster-weeks-labels" :style="{'background-color':props.item.w7.color}">{{ props.item.w7.code }}</span></td>
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
                    { text: 'W1', value: 'w1', sortable: false },
                    { text: 'W2', value: 'w2', sortable: false },
                    { text: 'W3', value: 'w3', sortable: false },
                    { text: 'W4', value: 'w4', sortable: false },
                    { text: 'W5', value: 'w5', sortable: false },
                    { text: 'W6', value: 'w6', sortable: false },
                    { text: 'W7', value: 'w7', sortable: false }
                ],
                desserts:[]
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
        }
</style>