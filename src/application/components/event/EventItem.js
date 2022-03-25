import DateIcon from "../icon/dateIcon";
import AddressIcon from "../icon/addressIcon";
import "./events.css";
import moment from "moment";

function EventItem({ id, date, title, address, category, description }) {
  return (
    <div key={id} className="card">
      <h2>{title}</h2>
      <p>
        <b className="category">{category}</b>
      </p>
      <span className="pt-5">{description}</span>

      <br />
      <div className="card-footer">
        <time className="date">
          <DateIcon />

          {moment().format("DD MMMM YYYY, hh:mm A")}
        </time>
        <address className="address">
          <AddressIcon /> {address}
        </address>
      </div>
    </div>
  );
}

export default EventItem;
