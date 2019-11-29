import axios from "axios";

export default class sessionManager{

    constructor(){
        this.localstorage=window.localStorage;

        this.getUserData = this.getUserData.bind(this)
    }

    login(mail,name,isNutricionist){
        this.localstorage.setItem('usermail',mail)
        this.localstorage.setItem('username',name)
        this.localstorage.setItem('isNutricionist',isNutricionist)
    }

    logout(){
        this.localstorage.clear()
    }

    isLogged(){
        return Boolean(this.localstorage.getItem('username'))
    }

    isNutricionist(){
        return this.localstorage.getItem('isNutricionist')
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