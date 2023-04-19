import { locations } from "../../db/data";

export default function IsValidId(id) {
  return locations.some((location) => location.id === id);
}
