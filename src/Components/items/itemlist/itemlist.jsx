import React from "react";
import "./itemlist.css";
import { Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';

function Itemlist({ itemID, date, allItems }) {
    console.log(allItems);
    return (
        <main>
            {/* {itemData.forEach((item) => { */}
            <div className="note" key={`notes${itemID}`} >
                <div className="note_card grid">
                    <div className="note_time">{date}</div>
                    <hr />
                    {allItems.map((itemName, i = 0) => {
                        console.log(itemName);
                        return <div key={`item${i}`} className="note_data"><span>{++i}.</span> {itemName}</div>
                    })}
                    <hr />
                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button variant="outlined" className="note_delete" >
                            Delete Note
                        </Button>
                    </Box>
                </div>
            </div>
            {/* })} */}
        </main>
    );
}

export default Itemlist;
