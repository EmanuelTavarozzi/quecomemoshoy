


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

    }

    getUserName(){ 
        return this.localstorage.getItem('username')        

    }


}