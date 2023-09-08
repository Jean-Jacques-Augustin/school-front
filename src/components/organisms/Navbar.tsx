import { listDrawer } from "../../constants/constants";
import CustomListDrawer from "../molecules/CustomListDrawer";

export default function Navbar() {
  return <CustomListDrawer listsShown={listDrawer} />;
}
