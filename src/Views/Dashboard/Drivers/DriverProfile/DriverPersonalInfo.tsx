import { Rating } from "@/components/ui/rating";
import RCard from "@/RComponents/RCard";
import RFlex from "@/RComponents/RFlex";
import { driver } from "@/Views/Dashboard/Drivers/fakeData";
import {
  Calendar,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  ScrollText,
  User2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const DriverPersonalInfo = () => {
  const { t } = useTranslation();
  return (
    <RCard
      contentClassName="flex gap-20 max-md:flex-col max-md:gap-5 pt-6"
      contentComponent={
        <>
          <RFlex className="gap-4">
            <img
              className="w-[175px] rounded-xl h-[175px] object-cover"
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            />
            <RFlex className="flex-col gap-[30px] py-1">
              <RFlex className="flex-col gap-3">
                <span className="font-bold">{driver.name}</span>
                <RFlex className="flex-col gap-2 text-[12px]">
                  <RFlex className="gap-2 flex-wrap">
                    <span className="flex gap-1 items-center text-foreground/80">
                      <MapPin className="w-3 h-3" />
                      {driver.location}
                    </span>
                    <span className="flex gap-1 items-center text-foreground/80">
                      <Phone className="w-3 h-3" />
                      {driver.phone}
                    </span>
                    <span className="flex gap-1 items-center text-foreground/80">
                      <Mail className="w-3 h-3" />
                      {driver.email}
                    </span>
                  </RFlex>
                  <span className="flex gap-1 items-center text-foreground/80">
                    <User2 className="w-3 h-3" />
                    {driver.gender}
                  </span>
                  <span className="flex gap-1 items-center text-foreground/80">
                    <Calendar className="w-3 h-3" />
                    {driver.join_date}
                  </span>
                  <Rating rating={4.5} disabled />
                  {driver.active ? (
                    <p className="flex gap-1   items-center ">
                      <span className="text-green-800">{t("online")} </span>
                    </p>
                  ) : (
                    <span className="text-destructive">{t("offline")}</span>
                  )}
                </RFlex>
              </RFlex>
            </RFlex>
          </RFlex>
          <RFlex className="gap-4">
            <RFlex className="flex-col gap-[30px] py-1">
              <RFlex className="flex-col gap-3">
                <span className="font-bold">{t("documents")}:</span>
                <RFlex className="flex-col gap-2 text-[12px]">
                  <a
                    target="_blank"
                    href={driver.liceneesUrl}
                    className="flex gap-1 hover:text-muted-foreground text-foreground/80 cursor-pointer "
                  >
                    <span className="flex gap-1 items-center">
                      <Newspaper className="w-3 h-3" />
                      {t("driver_licenees")}:{" "}
                    </span>
                    <span className="flex gap-1 items-center">
                      {driver.licenees}
                    </span>
                  </a>
                  <a
                    href={driver.degreeUrl}
                    target="_blank"
                    className="flex gap-1 hover:text-muted-foreground text-foreground/80 cursor-pointer "
                  >
                    <span className="flex gap-1 items-center">
                      <ScrollText className="w-3 h-3" />
                      {t("professional_driver_certificate")}:{" "}
                    </span>
                    <span className="flex gap-1 items-center">
                      {driver.degree}
                    </span>
                  </a>
                </RFlex>
              </RFlex>
            </RFlex>
          </RFlex>{" "}
        </>
      }
    />
  );
};

export default DriverPersonalInfo;
