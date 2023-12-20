import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { CalendarOptions } from "@fullcalendar/common";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
const Calendar = (props : any) => {
  const {dataAbsen, clickDate, dateSetting} = props;
  const [events, setEvents] = useState<any>([]);
  const [date, setDate] = useState<any>(null);

  useEffect(()=>{
    setEvents([]);
    inputAbsen(dataAbsen);
  },[dataAbsen]);

  const inputAbsen = (datas : any) => {
    datas.map((data : any)=>{
        const newData : any = {
          id:data.uuid,
          title:dayjs(data.tanggalMulai).format('HH:mm:ss')+' '+data.tipe_absen.name,
          start:dayjs(data.tanggalMulai).format('YYYY-MM-DD'),
          end:dayjs(data.tanggalSelesai).format('YYYY-MM-DD'),
          color:data.pelanggaran.code == 2 ? 'red' : '',
        } 
        setEvents((events: any)  => [...events, newData])
    })
  }

  const options : CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    droppable: true,
    headerToolbar: {
      left: "prev,next today dayGridMonth",
      center: "title",
      right: "",
    },
    initialDate: dateSetting,
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    events: {events},
    eventClick: (info)=>clickDate(info),
    drop: function (info) {
      if (
        document.querySelectorAll("#checkbox-events").length &&
        (document.querySelectorAll("#checkbox-events")[0] as HTMLInputElement)
          ?.checked
      ) {
        (info.draggedEl.parentNode as HTMLElement).remove();
        if (
          document.querySelectorAll("#calendar-events")[0].children.length == 1
        ) {
          document
            .querySelectorAll("#calendar-no-events")[0]
            .classList.remove("hidden");
        }
      }
    },
  };

  return (
    <div className="full-calendar">
      <FullCalendar {...options} />
    </div>
  );
}

export default Calendar;
