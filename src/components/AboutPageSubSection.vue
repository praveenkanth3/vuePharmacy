<template>
    <div >
        <h2>drop some feedback here</h2>
        <input v-model="feedback" />
        <button @click="onSubmitFeedback(feedback)">submit</button>
        <slot name="address" ></slot>
        <slot name="ad" :feedback="feedback"></slot>
    </div>
</template>
<script>
import myMixin from './mixin';
export default {
    name:'AboutSubSection',
    mixins: [myMixin],
}
</script>