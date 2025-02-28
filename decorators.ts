export function SealedClass(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

export function ToUpperCase() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };


    return descriptor;
  };
}

