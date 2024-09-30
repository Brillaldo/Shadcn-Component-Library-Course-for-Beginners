import React from 'react'

import { Calendar } from "@/components/ui/calendar"
import moment from 'moment'

function MyCalendar() {
    
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    
    
    const date2 = moment('2024-09-20');
    const date1 = moment(date?.toString());

    const differenceInDays = date1.diff(date2, 'days');

  return (
    <div>
        <p>{differenceInDays}</p>
        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
    </div>
  )
}

export default MyCalendar
