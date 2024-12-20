'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DateRangePicker from '../components/DatePickerRange';
import { useRouter } from 'next/navigation';  // Import useRouter for URL manipulation
import DataTable from '../components/DataTable';

export default function SearchPage() {
  const [gtin, setgtin] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const router = useRouter(); // Use router to manipulate the URL

  // Sample suggestion data
  const sampleSuggestions = ['25656545465465', '65456545465465', '85659545465465'];

  // Handle dropdown change
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setgtin(event.target.value as string);
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter suggestions based on input
    const filteredSuggestions = sampleSuggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Handle search button click
  const handleSearch = () => {
    console.log('Search Term:', searchTerm);
    console.log('Selected gtin:', gtin);

    // Update URL with query parameters
    const query = new URLSearchParams();
    if (gtin) query.set(gtin, searchTerm);  // Set the selected `gtin` and `searchTerm` as query parameters
    router.push(`/search?${query.toString()}`); // Update the URL
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <>
      <div className='w-full container mx-auto mt-10 p-4'>
        <h2 className="text-4xl mb-6">Tracey</h2>

        <div>
          <h2 className='text-xl mb-3'>Search By</h2>
          <div className="flex flex-col gap-16 lg:flex-row justify-center items-center h-auto">

            <div className="w-full h-full flex items-center gap-2 justify-center">
              <div>
                <Box sx={{ minWidth: 100 }} >
                  <FormControl fullWidth className='shadow-none'>
                    <InputLabel id="select-gtin">GTIN</InputLabel>
                    <Select
                      labelId="select-gtin"
                      id="demo-simple-select"
                      value={gtin}
                      className='shadow-none border w-full lg:w-[200px]'
                      label="GTIN"
                      onChange={handleDropdownChange}
                    >
                      <MenuItem value={"location"}>Location</MenuItem>
                      <MenuItem value={"serial"}>Serial</MenuItem>
                      <MenuItem value={"lat"}>Lat</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className=' flex items-center gap-2'>
                <div className="relative">
                  <TextField
                    label="Search"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search items..."
                  />

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <Box
                      sx={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginTop: '4px',
                        backgroundColor: '#fff',
                        zIndex: 10,
                        position: 'absolute',
                        width: '100%',
                      }}
                    >
                      {suggestions.map((suggestion, index) => (
                        <Box
                          key={index}
                          sx={{
                            padding: '8px',
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: '#f5f5f5' },
                          }}
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Box>
                      ))}
                    </Box>
                  )}
                </div>

                <div className=''>
                  <Button variant="contained" className='h-14' fullWidth onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              </div>

            </div>

            {/* DateRangePicker */}
            <DateRangePicker />

          </div>
        </div>

        <div className='  grid lg:grid-cols-2 w-full   justify-center items-center grid-cols-1'>
        <div className=' mt-4 max-w-[650px] p-4'>
          <DataTable />
        </div>
        <div className=' mt-4 max-w-[650px] p-4'>
          <DataTable />
        </div> 
        </div>
      </div>
    </>
  );
}
