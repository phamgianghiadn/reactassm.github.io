import { DateRange, Calendar } from "react-date-range";
//format của thư viện
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useState, useEffect, useRef } from "react";
import "./calenda.css";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

const Calenda = () => {
  // set giá trị ban đầu bằng ngày tháng ban đầu
  const [calendar, setcalendar] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "seclecttion",
    },
  ]);
  // khi chưa bắt sự kiện thì calendar sẽ ẩn đi
  const [isOpen, setIsOpen] = useState(false);
  // chỉ đến vùng chỉ định của ref
  const refcalendar = useRef(null);

  // khí mà mình kich bên ngoài hoặc esc thì nó tắt lịch
  useEffect(() => {
    // thếm sự kiện onclick
    document.addEventListener("click", anlichbenngoai, true);
    //nhấn nút
    document.addEventListener("keydown", anlichkhinhanESC, true);
  }, []);
  const anlichbenngoai = (event) => {
    console.log(refcalendar);
    // .target lấy sự kiện vị trí kích chuột
    console.log(event.target); // kiểm tra kich chuột ở đâu
    // contains(event.target) chứa vùng(nếu ngoài vùng sẽ tắt lịch)
    if (refcalendar.current && !refcalendar.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const anlichkhinhanESC = (event) => {
    // khi nhân nút esc
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <input
        className="inputcalenda"
        value={calendar}
        readOnly
        onClick={() => setIsOpen(true)}
      />
      <div className="calendarposiden" ref={refcalendar}>
        {isOpen && (
          <DateRange
            onChange={(item) => setcalendar([item.seclecttion])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={DateRange}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};
export default Calenda;
