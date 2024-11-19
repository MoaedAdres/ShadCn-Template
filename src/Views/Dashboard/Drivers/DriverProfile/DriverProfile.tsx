import RFlex from "@/RComponents/RFlex";
import RTabs from "@/RComponents/RTabs";
import {
  driverTerms,
  profileTabs,
} from "@/Views/Dashboard/Drivers/driverConstants";
import DriverPersonalInfo from "@/Views/Dashboard/Drivers/DriverProfile/DriverPersonalInfo";
import DriverShifts from "@/Views/Dashboard/Drivers/DriverProfile/DriverShifts";
import DriverTrips from "@/Views/Dashboard/Drivers/DriverProfile/DriverTrips";
import { useState } from "react";

const DriverProfile = () => {
  const [activeTab, setActiveTab] = useState(driverTerms.TRIPS);
  return (
    <RFlex className="flex-col gap-[20px]">
      <DriverPersonalInfo />
      <RTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={profileTabs}
        triggerClassName="text-[18px] "
      />
      {activeTab == driverTerms.TRIPS && <DriverTrips />}

      {activeTab == driverTerms.SHIFTS && <DriverShifts />}
    </RFlex>
  );
};

export default DriverProfile;
