export function metric( ) : MethodDecorator {
    return function(target: Function, key: string, descriptor: any) {
  
      const originalMethod = descriptor.value; 
      console.log(`Entering ${key} method`);  
      descriptor.value =  function (...args: any[]) {
        console.log(`Entering ${key} method`);
        console.log(`Args ${args}`);
        console.log(this.avgColWidth);
        const result = originalMethod.apply(this, args);
        console.log(`Leaving ${key} method` );
  
        return result;
      }
  
      return descriptor;
    }
  }