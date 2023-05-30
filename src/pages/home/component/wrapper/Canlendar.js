import React, { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import { FaCalendarAlt } from "react-icons/fa";
import "./Calendar.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function CalendarItem() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  const refCalendar = useRef(null);

  function openCalendar(e) {
    e.preventDefault();
    setOpen(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleKeydown, true);
  }),
    [];

  function handleKeydown(e) {
    console.log(e.key);
    if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleClickOutside(e) {
    e.preventDefault();
    // console.log(refCalendar);
    // console.log(e.target);
    if (refCalendar.current && !refCalendar.current.contains(e.target)) {
      setOpen(false);
    }
  }

  return (
    <div>
      <div>
        <FaCalendarAlt className="search-box-item-icon" />
        <input
          type="text"
          value={`${format(dateRange[0].startDate, "dd/MM/yyyy")} - ${format(
            dateRange[0].endDate,
            "dd/MM/yyyy"
          )} `}
          readOnly
          onClick={openCalendar}
        />
      </div>
      <div ref={refCalendar}>
        {open && (
          <DateRange
            onChange={(item) => setDateRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={dateRange}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
}

export default CalendarItem;
