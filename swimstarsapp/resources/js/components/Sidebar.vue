<template>
    <div>
        <h2>sidebar</h2>
        <ul>
            <li @click="redirectToDashboard">dashboard</li>
            <li @click="redirectToSms">sms</li>
        </ul>
    </div>
</template>

<script>
export default {
     methods: {
    redirectToDashboard() {
      this.$router.push('/admin/dashboard');
    },
    redirectToSms(){
        this.$router.push('/admin/sms');
    }
  },
};
</script>
