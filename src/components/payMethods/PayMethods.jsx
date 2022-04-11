import React from 'react'
import styles from './payMethods.module.css'
import { FormControl, Input, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';

const PayMethods = () => {
    const [troco, setTroco] = useState(false)
    return (
        <>
            <FormControl>
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