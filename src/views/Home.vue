<template>
    <div class="home">
    </div>
</template>

<script>


    export default {
        name: 'Home',
        components: {},
        data() {
            return {}
        },
        methods: {
            initData() {
                console.log(1111)
                // this.$http.get(this.$settings.base_url).then(res => {
                //     console.log(res.data)
                // })
            },
        },
        mounted() {
            this.initData()
        }
    }
</script>
