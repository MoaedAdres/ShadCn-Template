import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CommentRatings } from "@/components/ui/rating";
import RButton from "@/RComponents/RButton";
import RFlex from "@/RComponents/RFlex";
import RInput from "@/RComponents/RInput";
import RPopover from "@/RComponents/RPopover";
import RSearchInput from "@/RComponents/RSearchInput";
import RTable from "@/RComponents/RTable";
import { CustomColumn } from "@/types/index.type";
import { driver, trips } from "@/Views/Dashboard/Drivers/fakeData";
import {
  ArrowBigDown,
  ArrowBigDownIcon,
  ArrowBigLeft,
  ArrowBigRightIcon,
  Calendar,
  Filter,
  Mail,
  MapPin,
  Phone,
  User,
  User2,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const DriverDetails = () => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState<string>("");
  const handleSearchClicked = () => {};
  const [checked, setChecked] = useState<any>(true);

  const columns: CustomColumn[] = useMemo(
    () => [
      {
        id: "order_number",
        renderHeader: (info) => {
          return <span>{t("order_number")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original.order_number}</span>;
        },
      },
      {
        id: "customer_name",
        renderHeader: (info) => {
          return <span>{t("customer_name")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.customer_name}</span>;
        },
      },
      {
        id: "vehicle_type",
        renderHeader: (info) => {
          return <span>{t("vehicle_type")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.vehicle_type}</span>;
        },
      },
      {
        id: "vehicle_number",
        renderHeader: (info) => {
          return <span>{t("vehicle_number")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.vehicle_number}</span>;
        },
      },
      {
        id: "route_path",
        renderHeader: (info) => {
          return <span>{t("route_path")}</span>;
        },
        renderCell: ({ row }) => {
          return (
            <span>
              {row.original.source}
              {"->"}
              {row.original.destenation}
            </span>
          );
        },
      },
      {
        id: "status",
        renderHeader: (info) => {
          return <span>{t("status")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.status}</span>;
        },
      },
      {
        id: "evaluation",
        renderHeader: (info) => {
          return <span>{t("evaluation")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.evaluation}</span>;
        },
      },
      {
        id: "price",
        renderHeader: (info) => {
          return <span>{t("price")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.price}</span>;
        },
      },
      {
        id: "date",
        renderHeader: (info) => {
          return <span>{t("date")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.date}</span>;
        },
      },
      {
        id: "shift_number",
        renderHeader: (info) => {
          return <span>{t("shift_number")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.shift_number}</span>;
        },
      },
    ],
    [t, checked]
  );
  const records = useMemo(
    () => ({
      columns,
      data: trips,
    }),
    [columns]
  );

  return (
    <RFlex className="flex-col gap-[20px]">
      <div className="flex w-full justify-between bg-background shadow-[0px_0px_5px_2px_hsl(var(--foreground)/0.1)] rounded-2xl p-6">
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
                <CommentRatings rating={4.5} disabled />
                {driver.active ? (
                  <p className="flex gap-1   items-center ">
                    <span className="text-green-800">{t("Online")} </span>
                  </p>
                ) : (
                  <span className="text-destructive">{t("Offline")}</span>
                )}
              </RFlex>
            </RFlex>
          </RFlex>
        </RFlex>
      </div>
      <div className="flex flex-col gap-4 w-full bg-background shadow-[0px_0px_5px_2px_hsl(var(--foreground)/0.1)] rounded-2xl p-6">
        <span className="flex gap-1 items-center">
          {t("driver_trips")}
          <div className="flex justify-center items-center rounded-full text-[10px] mt-1 bg-muted w-4 h-4">
            {trips.length}
          </div>
        </span>
        <RFlex className="gap-2">
          <RSearchInput
            searchData={searchData}
            className="w-[350px]"
            handleSearchClicked={handleSearchClicked}
            handleDataChanged={(data) => setSearchData(data)}
            placeholder="order_number,customer_name,shift_number"
          />
          <RFlex className="items-center">
            <RPopover
              triggerComponent={<Calendar className="" />}
              contentClassName="w-fit"
              contentComponent={
                <RFlex className="flex-col">
                  <RFlex className="gap-1">
                    <Checkbox
                      id="range"
                      checked={checked}
                      onCheckedChange={(checked) => setChecked(checked)}
                    />
                    <Label htmlFor="range" className="cursor-pointer">
                      {t("range")}
                    </Label>
                  </RFlex>
                  <RFlex className="flex-col gap-1 items-center">
                    <RInput type="date" />
                    {checked && (
                      <>
                        <ArrowBigDownIcon />
                        <RInput type="date" />
                      </>
                    )}
                  </RFlex>
                  <RButton text="Save" />
                </RFlex>
              }
            />
          </RFlex>
        </RFlex>
        <RTable Records={records} />
      </div>
    </RFlex>
  );
};

export default DriverDetails;
