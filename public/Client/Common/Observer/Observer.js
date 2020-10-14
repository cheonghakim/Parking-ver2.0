export class Observer {
  constructor() {
    this.handlers = {};
  }

  register(event_name, handler, context) {
    var handler_array = this.handlers[event_name];
    if (handler_array === undefined) {
      handler_array = this.handlers[event_name] = [];
      //handlerArray = []
      //handlerArray.push(this.handlers[eventName])
    }
    handler_array.push({ handler: handler, context: context });
  }

  unregister(event_name, handler, context) {
    var handler_array = this.handlers[event_name];
    if (handler_array === undefined) return;
    for (var i = 0, max = handler_array.length; i < max; i++) {
      var current_handler = handler_array[i];
      if (
        handler === current_handler['handler'] &&
        context === current_handler['context']
      ) {
        handler_array.splice(i, 1);
        return;
      }
    }
  }

  // 상태 변경시 이벤트를 알려줄 함수
  notify(event_name, data) {
    var handler_array = this.handlers[event_name];
    if (handler_array === undefined) {
      return;
    }

    for (var i = 0, max = handler_array.length; i < max; i++) {
      var current_handler = handler_array[i];
      current_handler['handler'].call(current_handler['context'], data);
    }
  }
}
