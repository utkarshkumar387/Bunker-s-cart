import React from 'react';
import Itemlist from './itemlist/itemlist';
import Box from '@material-ui/core/Box';


const itemData = [
    {
        id: 1,
        date: "September 7 2020",
        items: ['Mango', 'pinepple', 'ginger']
    },
    {
        id: 2,
        date: "September 7 2020",
        items: ['Apple', 'pinepple', 'Ginger']
    },
    {
        id: 3,
        date: "September 7 2020",
        items: ['Mango', 'Garlic', 'ginger', 'Cloves']
    },
    {
        id: 4,
        date: "September 7 2020",
        items: ['Mango', 'pinepple', 'ginger']
    },
    {
        id: 4,
        date: "September 7 2020",
        items: ['Mango', 'pinepple', 'ginger']
    },
];
function Items() {
    return (
        <Box mt={2} flexWrap="wrap" display="flex" justifyContent="center">
            {itemData.map((item) => {
                return <Itemlist
                    key={`item${item.id}`}
                    itemID={item.id}
                    date={item.date}
                    allItems={item.items}
                />
            })}
        </Box>

    )
}

export default React.memo(Items)
