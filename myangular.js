//http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html

function Scope() {
	this.$$watchers = [];
}
Scope.prototype.$watch = function(watchFn, listenerFn){
	var watcher={
		watchFn : watchFn,
		listenerFn : listenerFn
	};
	this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function(){
	var self = this;
	this.$$watchers.map(function(watch){
		var newValue = watch.watchFn(self);
		var oldValue = watch.last;
		if(newValue !== oldValue){
			watch.listenerFn(newValue, oldValue, self);	
			watch.last = newValue;
		}
	});
};