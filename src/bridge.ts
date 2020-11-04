/**
 * @name 桥接模式
 * @description 抽象和实现分离 - 将各组的抽象和实现分离，充分解耦提高拓展性
 * **/

class Color {
  color: string
  constructor(color: string) {
    this.color = color
  }
  showColor() {
    console.log(`this color is ${this.color}`)
  }
}

class Weight {
  weight: number
  unit: string
  constructor(weight: number, unit: string) {
    this.weight = weight
    this.unit = unit
  }
  showWeight() {
    console.log(`this car's weight is ${this.weight} ${this.unit}`)
  }
}

class BridgeCar {
  weight: Weight
  color: Color
  constructor(weight: Weight, color: Color) {
    this.color = color
    this, (weight = weight)
  }
  showCarInfo() {
    console.log(
      `This car's info is ${this.color} color, and weight is ${this.weight.weight} ${this.weight.unit}`
    )
  }
}
