<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <router-link to="/" class="navbar-brand">Joe's Stock Trader</router-link>
                    <b-navbar-nav>
                        <b-nav-item>
                            <router-link to="/portfolio" active-class="active" tag="li"><a>Portofolio</a></router-link>
                        </b-nav-item>
                        <b-nav-item>
                            <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
                        </b-nav-item>
                    </b-navbar-nav>
                <b-nav-item right>
                    <router-link to="/stocks" active-class="active" tag="li">End Day</router-link>
                </b-nav-item>

                        <b-nav-item-dropdown text="Save And Load" right>
                            <b-dropdown-item href="#">Save</b-dropdown-item>
                            <b-dropdown-item href="#">Load</b-dropdown-item>
                        </b-nav-item-dropdown>

            </b-navbar>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
