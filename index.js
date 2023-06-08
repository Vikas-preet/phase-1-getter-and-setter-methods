// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius
  }
  //getter method for diameter
  get diameter() {
    return this.radius * 2
  }
  //setter method for diameter
  set diameter(diameter) {
    return (this.radius = diameter / 2)
  }
  //getter method for circumference
  get circumference() {
    return pi * this.diameter
  }
  set circumference(circumference) {
    return (this.radius = circumference / (pi * 2))
  }
  //getter method for area
  get area() {
    return pi * this.radius ** 2
  }
  //setter method
  set area(area) {
    return (this.radius = Math.sqrt(area / pi))
  }
}
