type Square = {
  kind: 'square';
  size: number;
};

type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

type Circle = {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

const fns = {
  square(shape: Square) { return shape.size * shape.size },
  rectangle(shape: Rectangle) { return shape.width * shape.height },
  circle(shape: Circle) { return shape.radius * shape.radius * Math.PI },
}

function area(shape: Shape): number {
  const fn = fns[shape.kind];
  return fn(shape as any);
}

const a1 = [1, 2];