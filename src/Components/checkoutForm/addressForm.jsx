import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from './customTextField';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';

function AddressForm({ next }) {
    // const [shippingCountries, setShippingCountries] = useState([]);
    // const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    // const [shippingOptions, setShippingOptions] = useState([]);
    // const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();
    console.log('methods is', methods);


    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));

    const fetchShippingSubdivisions = async () => {
        const { subdivisions } = await commerce.services.localeListSubdivisions('IN');

        setShippingSubdivisions(subdivisions);
    }


    useEffect(() => {
        fetchShippingSubdivisions();
        return () => {
            setShippingSubdivisions([]);
        };
    }, [])


    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingSubdivision }))}>
                    <Grid container spacing={3}>
                        <CustomTextField name='firstName' label='First name' />
                        <CustomTextField name='lastName' label='Last name' />
                        <CustomTextField name='Address1' label='Address' />
                        <CustomTextField name='email' label='Email' />
                        <CustomTextField name='city' label='City' />
                        <CustomTextField name='zip' label='Zip code' />
                        <Grid item xs={12} sm={6}>
                            <Typography><b>Only for India</b></Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping State</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" variant="outlined">Back to cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
