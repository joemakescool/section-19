<template>
    <div>
        <h1>Stocks folder: Stocks vue</h1>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>

    </div>
</template>

<script>
    import Stock from "@/components/stocks/Stock";

    export default {
        name: "Stocks",
        data: () =>({
        }),
        components: {
            'app-stock': Stock,
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
    }
</script>

<style scoped>

</style>
