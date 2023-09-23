import DashboardOrganism from "../../components/organisms/Dashboard";
import {dashboardLink} from "../../constants/constants";

export default function Dashboard() {
    return (
        <DashboardOrganism links={dashboardLink}  name={'Tableau de bord'}/>
    );
}