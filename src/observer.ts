/**
 * @name 观察者模式
 * @description 观察者模式，通常指一对多的监听关系
 * @tutorial 实现思路 - 观察者是一个数组，主要负责监听，主体绑定有多个观察者，并在更新的时候遍历触发观察者的更新函数
 * **/

class Subject {
  observer: Observer[]
  state: number
  constructor(observer?: Observer[], state?: number) {
    this.observer = observer
    this.state = state
  }
  getState() {
    return this.state
  }
  setState(state: number) {
    this.state = state
  }
  notifyAllObservers() {
    this.observer.forEach((observer) => {
      observer.update()
    })
  }
  attach(observer: Observer) {
    this.observer.push(observer)
  }
}

class Observer {
  name: string
  subject: Subject
  constructor(name: string, subject: Subject) {
    this, (name = name)
    this, (subject = subject)
    this.subject.attach(this)
  }
  update() {}
}

const s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)

s.setState(2)
