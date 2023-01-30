import React, { useState } from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";

function TodoForm({ createTodo }) {
  const [todoInputText, setTodoInputText] = useState("");

  const handleTodoInputTextChange = (e) => {
    setTodoInputText(e.target.value);
  };

  const addTodoItem = () => {
    if (todoInputText === "") {
      return;
    }
    createTodo(todoInputText);
    setTodoInputText("");
  };

  return (
    <form onSubmit={addTodoItem}>
      <FormControl w="full" p={4} display="flex">
        <Input
          placeholder="할 일을 추가해보세요"
          mr={4}
          value={todoInputText}
          onChange={handleTodoInputTextChange}
        />
        <Button colorScheme="blue" type="submit">
          추가
        </Button>
      </FormControl>
    </form>
  );
}

export default TodoForm;
