export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const retorno = metodoOriginal.apply(this, args);
      console.log(`--- metodo (${propertyKey})`);
      console.log(`--- parâmetros (${JSON.stringify(args)})`);
      console.log(`--- retorno (${JSON.stringify(retorno)})`);
      return retorno;
    };

    return descriptor;
  };
}
