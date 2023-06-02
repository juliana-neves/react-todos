import ListItem from '@mui/material/ListItem';
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from 'react';
import './TodoForm.css';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);

    const handleChange = (evt) => {
        const inputValue = setText(evt.target.value);
        setIsEmpty(inputValue === '')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
            addTodo(text);
            setText('');
            setIsEmpty(true);
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
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create todo" edge="end" type="submit"  disabled={isEmpty}>
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

