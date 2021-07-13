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



class Window1 {
    notify(event){
        console.log(`${event.db[event.db.length-1]} was added to Window 1`)
        console.log("New list")
        event.db.forEach(
            (persons)=>{
                console.log(persons)
            }
        )
        console.log("\n")
    }
  
    
}

class Window2 {
    notify(event){
        console.log(`${event.db[event.db.length-1]} was added to Window 2`)
        console.log("New list")
        event.db.forEach(
            (persons)=>{
                console.log(persons)
            }
        )
        console.log("\n")
    
    }
}



let db = new ChangesDB()
let w1 = new Window1()
let w2 = new Window2()
db.subscribe(w1)
db.subscribe(w2)
db.addData('Dania')
db.addData('Miguel')


db.unsubscribe(w1)
db.addData('Mireya')
db.addData('Camila')
