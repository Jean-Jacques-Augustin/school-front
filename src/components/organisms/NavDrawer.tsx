import { listDrawer } from "../../constants/constants";
import CustomListDrawer from "../molecules/CustomListDrawer";

export default function NavDrawers() {
  return <CustomListDrawer listsShown={[listDrawer]} />;
}
