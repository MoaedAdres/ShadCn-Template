import RFlex from "@/RComponents/RFlex";
import RPaginateTable from "@/RComponents/RPaginateTable";
import RSearchInput from "@/RComponents/RSearchInput";
import { CustomColumn } from "@/types/index.type";
import { shifts } from "@/Views/Dashboard/Drivers/fakeData";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const DriverShifts = () => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState<string>("");
  const handleSearchClicked = () => {};
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );
  const columns: CustomColumn[] = useMemo(
    () => [
      {
        id: "shift_number",
        renderHeader: (info) => {
          return <span>{t("shift_number")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original.shift_number}</span>;
        },
      },
      {
        id: "start_date",
        renderHeader: (info) => {
          return <span>{t("start_date")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.start_date}</span>;
        },
      },
      {
        id: "end_date",
        renderHeader: (info) => {
          return <span>{t("end_date")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.end_date}</span>;
        },
      },
      {
        id: "start_counter",
        renderHeader: (info) => {
          return <span>{t("start_counter")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.counter_at_the_start}</span>;
        },
      },
      {
        id: "end_counter",
        renderHeader: (info) => {
          return <span>{t("end_counter")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.counter_at_the_end}</span>;
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
        id: "volman",
        renderHeader: (info) => {
          return <span>{t("volman")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.volman}</span>;
        },
      },
    ],
    [t]
  );
  const records = useMemo(
    () => ({
      columns,
      data: shifts,
    }),
    [columns]
  );

  return (
    <div className="flex flex-col gap-4 w-full bg-background shadow-[0px_0px_5px_2px_hsl(var(--foreground)/0.1)] rounded-2xl p-6">
      <span className="flex gap-1 items-center">
        {t("driver_shifts")}
        <div className="flex justify-center items-center rounded-full text-[10px] mt-1 bg-muted w-4 h-4">
          {shifts.length}
        </div>
      </span>
      <RFlex className="gap-2">
        <RSearchInput
          searchData={searchData}
          className="w-[350px]"
          handleSearchClicked={handleSearchClicked}
          handleDataChanged={(data) => setSearchData(data)}
          placeholder="search_for_shift_number"
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

export default DriverShifts;
