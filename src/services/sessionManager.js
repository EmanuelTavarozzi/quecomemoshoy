


export default class sessionManager{

    constructor(){
        this.localstorage=window.localStorage;
    }

    login(mail){
        this.localstorage.setItem('user',mail)
    }

    logout(){
        this.localstorage.removeItem('user');
    }

    isLogged(){
        return Boolean(this.localstorage.getItem('user'))
    }

    getUserData(){

    }

    getUserName(){ //todo obtener nombre 
        const mail = this.localstorage.getItem('user')
        return mail

    }


}