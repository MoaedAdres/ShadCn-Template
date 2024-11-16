import RButton from "@/RComponents/RButton";
import RFlex from "@/RComponents/RFlex";
import RFlippingCard from "@/RComponents/RFlippingCard/RFlippingCard";
import RSearchInput from "@/RComponents/RSearchInput";
import {
  JoinRequest,
  joinRequests,
  trips,
} from "@/Views/Dashboard/Drivers/fakeData";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Check,
  Cross,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  ScrollText,
  User,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const JoinRequests = () => {
  const { t } = useTranslation();

  const frontContent = ({
    name,
    image,
    email,
    phone_number,
    request_date,
    location,
  }: JoinRequest) => {
    return (
      <RFlex className="flex-col gap-3 text-foreground/80 h-full">
        <span className="absolute top-0 right-2 ">{request_date}</span>
        <img src={image} className=" w-16 h-16 rounded-full" />
        <RFlex className="flex-col h-full gap-2">
          <span className="flex gap-1 item-center text-[18px] font-bold">
            <User />
            {name} The First
          </span>
          <span className="flex gap-1 item-center ">
            <Mail />
            {email}
          </span>
          <span className="flex gap-1 items-center">
            <Phone />
            {phone_number}
          </span>
          <span className="flex gap-1 items-center">
            <MapPin />
            {location}
          </span>
        </RFlex>
      </RFlex>
    );
  };
  const backcontent = ({
    driver_licenees,
    profeesional_certificate,
    driver_licenees_url,
    profeesional_certificate_url,
    request_date,
  }: JoinRequest) => {
    return (
      <RFlex className="flex-col gap-3 text-foreground/80 h-full">
        <span className="absolute top-0 right-2">{request_date}</span>
        <span className="text-[18px] font-bold">{t("documents")}:</span>
        <RFlex className="flex-col h-full gap-2 text-[14px]">
          <a
            target="_blank"
            href={driver_licenees_url}
            className="flex gap-1  hover:text-muted-foreground cursor-pointer "
          >
            <Newspaper />
            <RFlex className="flex-col gap-1">
              <span>{t("driver_licenees")}: </span>
              <span>{driver_licenees}</span>
            </RFlex>
          </a>
          <a
            href={profeesional_certificate_url}
            target="_blank"
            className="flex gap-1 hover:text-muted-foreground cursor-pointer "
          >
            <ScrollText />
            <RFlex className="flex-col gap-1">
              <span>{t("professional_driver_certificate")}: </span>
              <span>{profeesional_certificate}</span>
            </RFlex>
          </a>
        </RFlex>
      </RFlex>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {joinRequests.map((request: JoinRequest) => (
        <RFlex className="flex-col gap-2">
          <RFlippingCard
            flipCardClassName="w-full min-h-[275px]"
            frontContentComponent={frontContent(request)}
            frontContentClassName="p-4 relative"
            backContentClassName="p-4 relative"
            backContentComponent={backcontent(request)}
            backCardClassName="justify-between flex flex-col"
            backFooterComponent={
              <RFlex className="w-full gap-10 justify-center px-5">
                <RButton
                  text="reject"
                  Icon={Cross1Icon}
                  variant="destructive"
                  size="sm"
                />
                <RButton
                  text="accept"
                  Icon={Check}
                  className="bg-green-600 hover:bg-green-600/80"
                  size="sm"
                />
              </RFlex>
            }
          />
        </RFlex>
      ))}
    </div>
  );
};

export default JoinRequests;
