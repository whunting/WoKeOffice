const AV = require("../utils/av-live-query-weapp-min");

class Todo extends AV.Object {
    get content() { return this.get('content') }
    set content(value) { this.set('content', value) }
    
    get done() { return this.get('done') }
    set done(value) { this.set('done', value) }
}

AV.Object.register(Todo, 'Todo');
module.exports = Todo;
