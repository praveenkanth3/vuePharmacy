export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            fullName:'',
            email:'',
            enquire:'',
            feedback:''
        }
    },
    methods:{
        onSubmitFeedback(val){
            alert(`Thank you for your feedBack :${val} `)
        },
        onSubmitEnquire(){
            alert(`We will get back to you as soon as possible`);
            this.fullName = this.firstName + this.lastName;
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.enquire = '';
        }
    }
}