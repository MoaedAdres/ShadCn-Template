import RFlex from "@/RComponents/RFlex";
import RFlippingCard from "@/RComponents/RFlippingCard/RFlippingCard";
import RSearchInput from "@/RComponents/RSearchInput";
import { joinRequests, trips } from "@/Views/Dashboard/Drivers/fakeData";
import React from "react";
import { useTranslation } from "react-i18next";

const JoinRequests = () => {
  const { t } = useTranslation();

  const frontContent = (
    <>
      <span className="flex gap-1 items-center">
        {t("driver_trips")}
        <div className="flex justify-center items-center rounded-full text-[10px] mt-1 bg-muted w-4 h-4">
          {trips.length}
        </div>
      </span>
      <RFlex className="gap-2">
        <RFlex className="items-center"></RFlex>
      </RFlex>
    </>
  );
  const backcontent = (
    <>
      <span className="flex gap-1 items-center">
        {t("driver_trips")}
        <div className="flex justify-center items-center rounded-full text-[10px] mt-1 bg-muted w-4 h-4">
          {trips.length}
        </div>
      </span>
      <RFlex className="gap-2">
        <RFlex className="items-center"></RFlex>
      </RFlex>
    </>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {joinRequests.map((request) => (
        <RFlippingCard
          flipCardClassName="w-full h-[275px]"
          frontContentComponent={frontContent}
          backContentComponent={backcontent}
        />
      ))}
    </div>
  );
};

export default JoinRequests;
