import React from 'react'
import styles from './payMethods.module.css'
import { FormControl, Button, Input, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';

const PayMethods = () => {
    const [troco, setTroco] = useState(false)
    return (
        <>
            <FormControl>
                <Typography variant='h5' component={'h2'} className={styles.semiTitle}>Metodo de Pagamento</Typography>
                    <RadioGroup name="pagamento">
                        <FormControlLabel 
                            value="cartao" 
                            control={<Radio name='pagamento' style={{color: '#dbd8e3'}}/>} 
                            label="Cartão de Crédito" 
                            onClick={() =>{setTroco(false)}}
                        />
                        <FormControlLabel 
                            value="dinheiro" 
                            control={<Radio name='pagamento' style={{color: '#dbd8e3'}} />}
                            label="Dinheiro"
                            onClick={() =>{setTroco(true)}}
                        />
                        <FormControlLabel 
                            value="pix" 
                            control={<Radio name='pagamento' style={{color: '#dbd8e3'}}/>}
                            label="Pix"
                            onClick={() =>{setTroco(false)}}
                        />
                    </RadioGroup>
                    {troco && 
                    (
                        <>
                            <Input 
                                id='troco'
                                name='troco'
                                type='number'
                                placeholder='Valor para Troco?'
                                style={{color: '#dbd8e3'}}
                                className={styles.troco}
                            />
                        </>
                    )}
            </FormControl>
        </>
    )
}

export default PayMethods