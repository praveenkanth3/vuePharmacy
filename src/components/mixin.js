export default {
    data(){
        return{
            feedback:''
        }
    },
    methods:{
        onSubmitFeedback(val){
            alert(`Thank you for your feedBack :${val} `)
        }
    }
}