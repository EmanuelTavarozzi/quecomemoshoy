import axios from "axios";

export default class sessionManager{

    constructor(){
        this.localstorage=window.localStorage;
    }

    login(mail,name){
        this.localstorage.setItem('usermail',mail)
        this.localstorage.setItem('username',name)
    }

    logout(){
        this.localstorage.clear()
    }

    isLogged(){
        return Boolean(this.localstorage.getItem('username'))
    }

    getUserData(){
        return axios.post('http://localhost:5000/users/userdata',{
            mail: this.getUserMail()
        }).then((res)=> res.data)
    }

    getUserName(){ 
        return this.localstorage.getItem('username')        

    }
    getUserMail(){ 
        return this.localstorage.getItem('usermail')        

    }


}