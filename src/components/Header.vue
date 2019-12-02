<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <router-link to="/" class="navbar-brand">Joe's Stock Trader</router-link>
                    <b-navbar-nav>
                        <b-nav-item>
                            <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
                        </b-nav-item>
                        <b-nav-item>
                            <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
                        </b-nav-item>
                    </b-navbar-nav>
                <b-nav-item right>
                    <router-link to="/stocks" active-class="active" tag="li" @click="endDay">End Day</router-link>
                </b-nav-item>

                        <b-nav-item-dropdown text="Save And Load" right>
                            <b-dropdown-item href="#">Save</b-dropdown-item>
                            <b-dropdown-item href="#">Load</b-dropdown-item>
                        </b-nav-item-dropdown>

            </b-navbar>
        </div>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Header",
        computed: {
            funds() {
               return this.$store.getters.funds;
            },
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks'
            }),
          endDay() {
            this.randomizeStocks();
          },
        },
    }
</script>

<style scoped>

</style>
