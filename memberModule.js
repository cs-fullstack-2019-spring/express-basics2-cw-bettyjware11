module.exports = {
    signIn: ()=> {
        return "Please sign in with your Member credentials"
    },
    contact: (name,number) =>{
        return `Thanks ${request.params.name}! We will contact you shortly at  ${request.number}`;
    },

};