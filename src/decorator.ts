/**
 * @name 装饰器模式
 * @description 装饰器模式用于动态地拓展类
 * **/

class DecoratorCar {
  create() {
    console.log('create a car')
  }
}

class Decorator {
  car: DecoratorCar
  constructor(car: DecoratorCar) {
    this.car = car
  }
  create() {
    this.car.create()
  }
  playMusic() {
    console.log('Play music')
  }
}

let decoratorCar = new DecoratorCar()
decoratorCar.create()

let dec = new Decorator(decoratorCar)
dec.create()
