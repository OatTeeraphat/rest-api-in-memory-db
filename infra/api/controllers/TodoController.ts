import express, { Request, Response } from "express";
import { TodoService } from "../../../service/todo/TodoService";

const router = express.Router();
const todoService = new TodoService();


// GET getAllTodos
router.get("/todos", (req: Request, res: Response) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
});


// POST addNewTodo
router.post("/todos", (req: Request, res: Response) => {
  const { id, title, completed } = req.body;
  todoService.addNewTodo({ id, title, completed });
  res.status(201).send({"success" : "todo item already record"});
});


// PUT markAsCompletedTodo
router.put("/todos/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  todoService.markAsCompletedTodo(id);
  res.status(200).send({"success" : `todo id ${id} already mark as completed`});
});


export default router;