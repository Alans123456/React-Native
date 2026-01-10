import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
export const gettodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

export const mutationAddTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, { text }) => {
    const todoId = await ctx.db.insert("todos", { text, isCompleted: false });
    return todoId;
  },
});

export const mutationToggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (todo === null) {
      throw new Error("Todo not found");
    }
    await ctx.db.patch(args.id, { isCompleted: !todo.isCompleted });
  },
});

export const mutationDeleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const clearall = mutation({
  handler: async (ctx) => {
    const allTodos = await ctx.db.query("todos").collect();
    for (const todo of allTodos) {
      await ctx.db.delete(todo._id);
    }
    return { deleted: allTodos.length };
  },
});
