import React from 'react'
import { FormControl, Typography, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';
import styles from './additionalsForm.module.css'
const AdditionalsForm = () => {
  return (
    <div>
      <FormControl>
          <FormControlLabel control={<Checkbox style={{color: '#dbd8e3'}}/>} label="Molho de Goiba na cachaça" name='goiaba' value="0.50"/>
          <Typography variant='h6' fontSize='18px' className={styles.meat}>Tipo de Carne</Typography>
          <RadioGroup  defaultValue="boi" name="hamburguer">
            <FormControlLabel value="porco" control={<Radio style={{color: '#dbd8e3'}}/>} label="Hamburguer de carne de porco"/>
            <FormControlLabel value="boi" control={<Radio style={{color: '#dbd8e3'}}/>}label="Hamburguer de carne de boi"/>
            <FormControlLabel value="vegetariano" control={<Radio style={{color: '#dbd8e3'}}/>}label="Hamburguer vegetariano"/>
          </RadioGroup>
      </FormControl>
    </div>
  )
}

export default AdditionalsForm