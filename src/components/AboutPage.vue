<template>
    <div>
        <h1>About</h1>
        <AboutPageSubSection>
            <template #address>
                <h1>Address</h1>
                <pre>
                    Estancia IT Park,Vallancherry Plot No. 140 & 151,
                    Grand Southern Trunk Road, Vallancherry, Taluk,
                    Chengalpattu, Tamil Nadu 603202
                </pre>
            </template>
        </AboutPageSubSection>
        <EnquieSection>
            <template v-slot:successMsg="slotProps">
                <div v-if="slotProps.userName">Your enquiry  has been recorded  {{ slotProps.userName }}</div>
            </template>
        </EnquieSection>
    </div>
</template>
<script>
import AboutPageSubSection from './AboutPageSubSection.vue';
import EnquieSection from './EnquieSection.vue';
export default{
    name: 'AboutPage',
    components:{
        AboutPageSubSection,
        EnquieSection,
    }
}
</script>