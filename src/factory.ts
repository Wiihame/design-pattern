/**
 * @name 工厂模式
 * @description: 子模块和总系统解耦，统一接口的抽象而屏蔽接口的具体实现时，可以使用工厂模式。这种实现也可以通过java或ts语言提供的抽象类来实现
 * **/

class Car {
  name: string
  constructor(name: string) {
    this.name = name
  }
  start() {
    console.log(`${this.name} start!`)
  }
}

class Factory {
  create(name: string) {
    return new Car(name)
  }
}

const factory = new Factory()
const car = factory.create('caldirac')
car.start()

/**
 * @description 抽象类实现factory pattern
 * **/

abstract class AbstractCar {
  constructor(public name: string) {}
  abstract start(): void
}

class Caldirac extends AbstractCar {
  constructor(name: string) {
    super(name)
  }
  start() {
    console.log(`${this.name} start!`)
  }
}

const newCar = new Caldirac('CCC')
newCar.start()

/**
 * 实际样例：jQuery的 $ 方法传入元素回返回一个对应jQuery对象
 * window.$ = function(selector) {
 *   return new JQuery(selector)
 * }
 * **/
