export interface Shape {
  area(): number;
  perimeter(): number;
}

export interface Rectangle extends Shape {
  width: number;
  height: number;
}

export interface Square extends Shape {
  side: number;
}

