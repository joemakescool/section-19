<template>
    <div class="row">

        <div class="col-sm-6 col-md-4 col-xs-12">
            <h3>A stock</h3>
            <div class="panel panel-info">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
                <div class="panel-body">
                    <div class="pull-left">
                        <label>
                            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}">
                        </label>
                    </div>

                    <div class="pull-right">
                        <button
                                class="btn btn-success"
                                @click="sellStock"
                                :disabled="insufficientQuantity || quantity <=0 || !Number.isInteger(quantity)"
                        >
                            {{ insufficientQuantity ? 'Not enough stocks' : 'Sell' }}
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
        computed: {
          insufficientQuantity() {
              return this.quantity > this.stock.quantity;
          },
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
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
