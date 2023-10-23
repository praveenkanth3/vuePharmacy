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
                <di></di>
            </template>
        </AboutPageSubSection>
        <AboutPageSubSection>
            <template v-slot:ad="slotProps">
                <di>Your response {{ slotProps.feedback }}</di>
            </template>
        </AboutPageSubSection>
    </div>
</template>
<script>
import AboutPageSubSection from './AboutPageSubSection.vue';
export default{
    name: 'AboutPage',
    components:{
        AboutPageSubSection,
    }
}
</script>