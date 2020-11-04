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
  constructor() {}
  recieve(gift: Gift) {
    reciever.listen(() => {
      reciever.recieve(gift)
    })
  }
}

class Sender {
  constructor() {}
  sendGift(target: Agent) {
    let gift = new Gift('flower')
    target.recieve(gift)
  }
}
class Reciever {
  constructor() {}
  recieve(gift: Gift) {
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
const reciever = new Reciever()
const agent = new Agent()

sender.sendGift(agent)
