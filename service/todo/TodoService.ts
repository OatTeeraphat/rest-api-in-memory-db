import NodeCache from "node-cache";
import { Todo } from "../../domain/todo/Todo";
import { CacheFactory } from "../../infra/cache/CacheFactory";


export class TodoService {
  private cache = CacheFactory.initCache();

  getAllTodos() : Todo[] {
    return this.cache.keys().map(key => this.cache.get(key)) as Todo[] ;
  }

  addNewTodo(todo: Todo): void {
    this.cache.set(todo.id, {...todo, completed : false});
  }

  markAsCompletedTodo(id: string): void {

    const todo = this.cache.get(id) as Todo;

    if (todo) {
      this.cache.set(id, {...todo, completed : true});
    }

  }
}