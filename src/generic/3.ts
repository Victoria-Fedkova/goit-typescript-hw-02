/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<TypeA extends object, TypeB extends object>(
  objA: TypeA,
  objB: TypeB
) {
  return Object.assign(objA, objB);
}

export {};
