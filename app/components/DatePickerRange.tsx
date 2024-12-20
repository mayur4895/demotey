'use client';

import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

export default function DateRangePicker() {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  // Calculate the difference using useMemo
  const difference = useMemo(() => {
    const endDate = toDate || new Date(); // Use "Now" if "To" is null

    if (fromDate && endDate) {
      const years = differenceInYears(endDate, fromDate);
      const months = differenceInMonths(endDate, fromDate) % 12;
      const weeks = Math.floor(differenceInDays(endDate, fromDate) / 7) % 4;
      const days = differenceInDays(endDate, fromDate) % 7;
      const hours = differenceInHours(endDate, fromDate) % 24;
      const minutes = differenceInMinutes(endDate, fromDate) % 60;

      // Format the difference in a serial order
      return `   ${days} d    ${weeks} w   ${months} m   ${minutes} m   ${years} y `;
    }

    return 'select both "From" and "To" dates.';
  }, [fromDate, toDate]); // Recalculate when `fromDate` or `toDate` changes

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex items-center gap-1 flex-col relative'>
        <div className='font-normal absolute -top-10  left-0  break-words text-nowrap'>{difference}</div>
        
        <div className='flex items-center gap-2'>
          {/* From Date */}
          <DatePicker
            label="From"
            value={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: { width: '150px' }, // Adjust the width of the From Date picker
              },
            }}
          />

          {/* To Date */}
          <DatePicker
            label="Now"
            value={toDate}
            onChange={(newValue) => setToDate(newValue)}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: { width: '150px' }, // Adjust the width of the To Date picker
              },
            }}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}
