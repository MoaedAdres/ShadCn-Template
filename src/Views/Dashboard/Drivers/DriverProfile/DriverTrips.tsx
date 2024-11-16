import { useIsMobile } from "@/hooks/use-mobile";
import RFlex from "@/RComponents/RFlex";
import RPaginateTable from "@/RComponents/RPaginateTable";
import RSearchInput from "@/RComponents/RSearchInput";
import RTable from "@/RComponents/RTable";
import { CustomColumn } from "@/types/index.type";
import DateFilter from "@/Views/Dashboard/Drivers/DriverProfile/DateFilter";
import { trips } from "@/Views/Dashboard/Drivers/fakeData";
import { ArrowBigDown, ArrowBigRight } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const DriverTrips = () => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState<string>("");
  const handleSearchClicked = () => {};
  const [backChecked, setBackChecked] = useState<any>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);
  const handlePageChange = React.useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );
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
            <p className="flex gap-[1px] w-fit items-center max-md:flex-col">
              <span className="text-center">{row.original.source}</span>
              {isMobile ? (
                <ArrowBigDown className="w-5 h-5 mt-1" />
              ) : (
                <ArrowBigRight className="w-5 h-5 mt-1" />
              )}
              <span className="text-center">{row.original.destenation}</span>
            </p>
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
          return (
            <RFlex className="gap-2 items-center">
              <span>{t("date")}</span>
              <DateFilter
                backChecked={backChecked}
                setBackChecked={setBackChecked}
              />
            </RFlex>
          );
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
    [t, backChecked]
  );
  const records = useMemo(
    () => ({
      columns,
      data: trips,
    }),
    [columns]
  );

  return (
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
        <RFlex className="items-center"></RFlex>
      </RFlex>
      <RPaginateTable
        Records={records}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
        paginationContainerClassName="justify-end"
      />
    </div>
  );
};

export default DriverTrips;
