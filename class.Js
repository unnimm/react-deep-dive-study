class Car {
    constructor(name){
        this.name = name
    }

    honk(){
        console.log(`${this.name} 경적을 울립니다.`)
    }
}

class Trunk extends Car{
    constructor(name){
        super(name)
    }
    load(){
        console.log(`짐을 싣습니다.`)
    }
}

const myCar = new Car('자동차')
myCar.honk()

const trunk = new Trunk('트럭')
trunk.honk()
trunk.load()
