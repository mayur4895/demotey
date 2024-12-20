'use client'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import DateRangePicker from '../components/DatePickerRange';
import QuantityInfo from '../components/QuantityInfo';

export default function RecallPage() {
  const [Status, setStatus] = useState('all');

  const handleDropdownChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
     

    <div className='w-full container mx-auto mt-10 p-4'>
   

    <div className="flex flex-col gap-16 lg:flex-row  w-full justify-between items-center h-auto">
       <div className=' flex gap-4'>
       <h2 className="text-4xl mb-6">Tracey</h2>
       <h2 className='text-3xl mb-3'>Recalls</h2>
      <div className="flex flex-col gap-16 lg:flex-row justify-center items-center h-auto">
      <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth className='shadow-none'>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="demo-simple-select"
                value={Status}
                onChange={handleDropdownChange}
                label="Status"
                className='shadow-none border w-full lg:w-[200px]'
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="in-stock">In stock</MenuItem>
                <MenuItem value="shipped">Shipped</MenuItem>
                <MenuItem value="resolved">Resolved</MenuItem>
              </Select>
            </FormControl>
          </Box>
         

        </div>

       </div>
        {/* DateRangePicker */}
        <DateRangePicker />

      </div>

      <div className="flex flex-col gap-5 mt-4">
  {Array.from({ length: 2 }).map((_, index) => {
    return (
      <div key={index} className=' mt-2'>
        <h2 className='text-xl'>GTIN: 48464564484848</h2>
        <div className='flex flex-col gap-4'>
            <h2>Location:455455</h2>
        <div className="w-[351px]">
          <QuantityInfo />
        </div>
        <h2>Location:455455</h2>
        <div className="w-[351px]">
          <QuantityInfo />
        </div>
        </div>
      </div>
    );
  })}
</div>

    </div>
 
 
  );
}
