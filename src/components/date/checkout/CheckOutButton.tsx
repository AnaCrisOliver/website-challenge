import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CheckOutButton() {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        inputVariant="outlined"
        margin="normal"
        id="date-picker-dialog"
        label="Check-out"
        format="MM/dd/yyyy"
        value={new Date()}
        onChange={(newValue) => newValue?.getDate()}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}/>
    </MuiPickersUtilsProvider>
  );
}
