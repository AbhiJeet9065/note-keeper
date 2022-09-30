import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { styled } from '@mui/material/styles';
import { DeleteOutlineOutlined as Delete } from "@mui/icons-material";

import { DataContext } from "./context/DataProvider";

const StyledCard = styled(Card)`
    width: 475px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Note = ({ note }) => {

    const { notes, setNotes, } = useContext(DataContext);

    const deleteNote = () => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Delete 
                    fontSize="small" 
                    style={{ marginLeft: 'auto' }}
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>
    )
};

export default Note;