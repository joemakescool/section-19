<template>
    <div>
        <h1>Trade or View your portfolio</h1>
        <h6>You may save & load your Data</h6>
        <h6>Click on 'End Day' to begin new Day</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            funds() {
               return this.$store.getters.funds;
            },
        },
    }
</script>

<style scoped>

</style>
