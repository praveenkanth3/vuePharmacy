<template>
    <div>
        <h1>Enquire here</h1>
        <input :placeholder="'First name'" v-model.trim="firstName"/>
        <input :placeholder="'Last name'" v-model.trim="lastName"/>
        <input :placeholder="'Email'" v-model="email"/>
        <input :placeholder="'Enquire about'" v-model="enquire"/>
        <button @click="onSubmitEnquire">Submit</button>
        <slot name="successMsg" :userName="fullName"></slot>
    </div>

</template>
<script>
import Mymixin from './mixin'
export default {
    name: 'EnquireSection',
    mixins:[Mymixin]
}
</script>