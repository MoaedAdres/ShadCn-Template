import RFlex from "@/RComponents/RFlex";
import DriverPersonalInfo from "@/Views/Dashboard/Drivers/DriverProfile/DriverPersonalInfo";
import DriverShifts from "@/Views/Dashboard/Drivers/DriverProfile/DriverShifts";
import DriverTrips from "@/Views/Dashboard/Drivers/DriverProfile/DriverTrips";

const DriverDetails = () => {
  return (
    <RFlex className="flex-col gap-[20px]">
      <DriverPersonalInfo />
      <DriverTrips />
      <DriverShifts />
    </RFlex>
  );
};

export default DriverDetails;
