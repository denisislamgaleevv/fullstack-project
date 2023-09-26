
import {makeAutoObservable} from 'mobx'

class UserStore {
    _user = {}
    _isLoggedIn = false

    constructor(){
        makeAutoObservable(this)
    }
    setUser(user){
        this._user = user
    }
    get user(){
        return this._user
    }
    setLoggedIn(loggedIn){
        this._isLoggedIn = loggedIn
    }
    get loggedIn(){
        return this._isLoggedIn
    }
}

export default UserStore