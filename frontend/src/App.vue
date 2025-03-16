<script setup lang="ts">
import axios from 'axios';
function created() {
    axios
        .get('/csrf-token', {
            headers: {
                Accept: 'application/json', // Yêu cầu Laravel trả về JSON
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.error(error));
}
created();
</script>
<template>
    <router-view />
</template>
