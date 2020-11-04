/**
 * @name 单例模式
 * @description 一个类在整个执行周期内只会有一个实例，通过IIFE创建闭包保存该单例的实例，通过类的静态方法调用
 * **/

class Singleton {
  private show: boolean
  constructor() {
    this.show = false
  }
  showInstance() {
    if (!this.show) {
      this.show = true
      console.log('first show')
    } else {
      console.log('have show')
    }
  }
  static getInstance(): Singleton | null {
    return
  }
}

Singleton.getInstance = (function () {
  let instance: Singleton = undefined
  return function () {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

const singletonA = Singleton.getInstance()
singletonA.showInstance()
const singletonB = Singleton.getInstance()
singletonB.showInstance()
