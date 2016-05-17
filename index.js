var scope = new Scope();

scope.firstName = 'Dan';
scope.counter = 0 ;
scope.$watch(
  function(scope) {return scope.firstName },
  function(newValue, oldValue, scope) {scope.counter++;}
);
console.assert(scope.counter ===0);
scope.$digest();
console.assert(scope.counter ===1);
scope.$digest();
scope.$digest();
console.assert(scope.counter ===1);
scope.firstName = 'May';
scope.$digest();
console.assert(scope.counter ===2);