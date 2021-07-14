import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

function CustomTextField({ name, label, required }) {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        fullWidth
                        label={label}
                        required={required}
                    />
                )}
            />
        </Grid>
    );
}

export default CustomTextField
