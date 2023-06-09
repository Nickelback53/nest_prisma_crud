import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/v1/todos')
export class TodoController {
    constructor(private readonly todoService:TodoService){}

    @Get()
    async fetchAllTodos(): Promise <Todo[]> {
        return this.todoService.fetchAllTodos();
    }

    @Get(':id')
    async fetchTodoItem(@Param('id') id: number): Promise <Todo | null> {
        return this.todoService.fetchTodoItem(id);
    }

    @Delete(':id')
    async deleteodoItem(@Param('id') id: number): Promise <Todo | null> {
        return this.todoService.deleteTodoItem(id);
    }

    @Post()
    async addTodoItem(@Body() data: Todo): Promise <Todo> {
       return this.todoService.addTodoItem(data);
    }

    @Patch(':id')
    async updateTodoItem(@Param('id') id: number,@Body() data: Todo): Promise <Todo> {
       return this.todoService.updateTodoItem(id,data);
    }
}
