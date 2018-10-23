<template>
        <h1>Home page</h1>
</template>
<script>
    export default {
        name: "Home",
        data(){
            return{
                rosters : [
                    {
                        name: 'Sajid',
                        id:1,
                        role:2,
                        roster : [{
                            date: '2018-01-01',
                            status : {
                                id : 1,
                                color : '#eee',
                                is_active : true,
                                is_manually_assignable: true
                            },
                            leave_requests: [
                                {
                                    id : 2,
                                    type : {
                                        id : 3,
                                        title : 'Annual',
                                        status : 'Approved'
                                    },
                                    approver : {
                                        id : 3,
                                        employeeId : 'adaf'
                                    }
                                }
                            ]
                        }]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>