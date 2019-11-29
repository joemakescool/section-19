<template>
    <div class="row">

        <div class="col-sm-6 col-md-4 col-xs-12">
            <h3>A stock</h3>
            <div class="panel panel-success">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
                <div class="panel-body">
                    <div class="pull-left">
                        <label>
                            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                        </label>
                    </div>

                    <div class="pull-right">
                        <button
                                class="btn btn-success"
                                @click="sellStock"
                                :disabled="quantity <=0 || !Number.isInteger(quantity)"
                        >
                            Sell Stock
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Stock",
        props: ['stock'],
        data: () =>({
            quantity: 0
        }),
        methods: {
            ...mapActions({
                sellStock: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.sellStock();
            }
        },


    }
</script>

<style scoped>

</style>
