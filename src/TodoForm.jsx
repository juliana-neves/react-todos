import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from 'react';

export default function TodoForm({ addTodo, todos }) {
    const [text, setText] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);
    const [error, setError]= useState(false);

    const handleChange = (evt) => {
        const inputValue = setText(evt.target.value);
        setIsEmpty(inputValue === '');
        setError(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isRepeat = todos.some((todo) => todo.text.toUpperCase() === text.toUpperCase());
        if (!isRepeat) {
            addTodo(text);
            setText('');
            setIsEmpty(true);
        } else {
            setError(true);
        }
    }

    return (
        <ListItem onSubmit={handleSubmit}>
            <form className='Form'>
                <TextField id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    fullWidth
                    error={error}
                    helperText={error ? "That to-do already exist, try another one" : ''}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create todo"
                                edge="end"
                                type="submit"
                                disabled={isEmpty}>
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>

    );
}

