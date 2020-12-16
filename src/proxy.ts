/**
 * @name 代理模式
 * @description 分离代理和被调用对象，降低系统耦合并保护目标对象
 * **/

class Gift {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Agent {
  receiver: Receiver
  constructor(receiver: Receiver) {
    this.receiver = receiver
  }
  receive(gift: Gift) {
    this.receiver.listen(() => {
      this.receiver.receive(gift)
    })
  }
}

class Sender {
  constructor() {}
  sendGift(target: Agent) {
    let gift = new Gift('flower')
    target.receive(gift)
  }
}
class Receiver {
  constructor() {}
  receive(gift: Gift) {
    console.log(`revieve ${gift.name}`)
  }
  listen(fn: () => void) {
    // setTimeout 模拟接受者可以接受信息的时候
    setTimeout(() => {
      fn()
    }, 100)
  }
}

const sender = new Sender()
const receiver = new Receiver()
const agent = new Agent(receiver)

sender.sendGift(agent)
