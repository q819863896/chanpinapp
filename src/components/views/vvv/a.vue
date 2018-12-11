<template>
    <div class="a">
        <input type="text" :value="msg" @change="inputMsg">
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return{
            msg: "as"
        }
    },
    computed: mapState({
        msg:state => state.msg
    }),
    methods: {
        inputMsg (e) {
            this.$store.commit("SET_MSG", e.target.value);
            this.$store.push("/b");
        }
    }
}
</script>
