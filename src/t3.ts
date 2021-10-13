function addProp(constructor: Function) {
  constructor.prototype.job = 'fe';
}

@addProp
class P {
  job: string;
  constructor(public name: string) {}
}

let p = new P('林不渡');

console.log(p.job); // fe