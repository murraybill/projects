import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=austria';


interface ObjectData {
    total: number;
    objectIDs: number[];
}

interface ChipData {
    key?: number;
    label?: string;
}

let loadedObjects: ObjectData;

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {

    const [chipData, setChipData] = React.useState<ChipData[]>([]);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const callRestApi = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json(); //extract JSON from the http response
            // do something with myJson
            console.log(JSON.stringify(myJson))
            loadedObjects = myJson;

            const chips: ChipData[] = [];
            loadedObjects?.objectIDs?.forEach(element => {
                const item =
                {
                    key: element,
                    label: element.toString(),
                }
                chips.push(item);
            });
            setChipData(chips);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div>
            <Button variant="contained" onClick={callRestApi}>click me</Button>
            <p>Total:{chipData.length}</p>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {
                    let icon;
                    return (
                        <ListItem key={data.key}>
                            <Chip
                                icon={icon}
                                label={data.label}
                                onDelete={handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>
        </div>
    );
}