export default class Animation {
  constructor(name, isDynamic, scene) {
    this.name = name;
    this.dynamic = isDynamic;
    this.scene = scene;
  }

  draw() {
    return;
  }

  update(dt) {
    return;
  }
}