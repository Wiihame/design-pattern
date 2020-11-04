/**
 * @name 适配器模式
 * @description 将一个类转化为另一个类的接口，Engine可能不单一版本或内容
 * **/

class Engine {
  start() {
    console.log('Start engine')
  }
}

class AdapterCar {
  engine: Engine
  constructor() {
    this.engine = new Engine()
  }
  start() {
    return this.engine.start()
  }
}

const adapterCar = new AdapterCar()
adapterCar.start()
