<template>
    <div class="row">

        <div class="col-sm-6 col-md-4 col-xs-12">
            <h3>A stock</h3>
            <div class="panel panel-success">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
                <div class="panel-body">
                    <div class="pull-left">
                        <label>
                            <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Quantity"
                                    v-model="quantity"
                                    :class="{ danger: insufficientFunds }"

                            >
                        </label>
                    </div>

                    <div class="pull-right">
                        <button
                                class="btn btn-success"
                                @click="buyStock"
                                :disabled="insufficientFunds || quantity <=0 || !Number.isInteger(quantity)"
                        >
                            {{ insufficientFunds ? 'Insufficient funds to by' : 'Buy' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
        data: () =>({
           quantity: 0
        }),
        computed: {
            funds() {
              return this.$store.getters.funds;
            },
            insufficientFunds() {
             return this.quantity * this.stock.price > this.funds;
            },
        },
        methods: {
            buyStock() {
                const order = {
                    stocksId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };

                // eslint-disable-next-line no-console
                console.log(order);
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        },


    }
</script>

<style scoped>
    .danger {
        border: 1px solid crimson;
    }

</style>
