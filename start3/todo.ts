interface Todo {
    name: string;
    completed?: boolean;
}

interface ITodoService{
    add(todo:Todo):Todo;
    delete(todoId:number):void;
    getAll():Todo[];
    getById(todoId:number):Todo;
}

var todo: Todo = {
    name: 'Pick up dry cleaning',
    // completed:true
};
// var todo = <Todo>{}; 

interface jQuery{
    (selector:string):HTMLElement;
    version:number;
}

var $ = <jQuery>function(selector){
    //Find DOM element
}

$.version = 1.12;

var element = $('#container');
element.blur();
