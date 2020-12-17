import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.locale("fr_FR");
dayjs.extend(utc);

export { dayjs };
