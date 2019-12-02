<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from '@/components/portfolio/Stock.vue'
    // :stock is being passed to the child component.

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio',
            }),
            components: {
                'app-stock': Stock,
            }
        }
    }
</script>
