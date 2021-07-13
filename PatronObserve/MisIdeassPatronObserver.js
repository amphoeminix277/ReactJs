const Observable = require("./PatronObserver");



class ChangesDB extends Observable {
    constructor(){
        super();
        this.db = []
    }

    addData(data){
        this.db.push(data)
        this.notifyObservable(this)
    }

}


class ExampleCountries {
    notify(event){
        console.log(`${event.db[event.db.length-1]} was added to Window 1`)
    }
}

class  {
    notify(event){
        console.log(`${event.db[event.db.length-1]} was added to Window 2`)
    }
}



let db = new ChangesDB()
let w1 = new Window1()
let w2 = new Window2()
db.subscribe(w1)
db.subscribe(w2)
db.addData('Andrés')
db.addData('Alfredo')


db.unsubscribe(w1)
db.addData('José')
db.addData('Pedro')