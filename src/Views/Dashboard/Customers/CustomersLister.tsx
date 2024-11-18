import { Button } from "@/components/ui/button";
import RButton from "@/RComponents/RButton";
import RCheckDropdown from "@/RComponents/RCheckDropdown";
import RDateFilter from "@/RComponents/RDateFilter";
import RFlex from "@/RComponents/RFlex";
import RImageName from "@/RComponents/RImageName";
import RPaginateTable from "@/RComponents/RPaginateTable";
import RSearchInput from "@/RComponents/RSearchInput";
import RTable from "@/RComponents/RTable";
import { CheckActionItem, CustomColumn } from "@/types/index.type";
import { customers } from "@/Views/Dashboard/Customers/customersFakeData";
import { Filter, List } from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CustomersLister = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState<string>("");
  const handleSearchClicked = () => {};
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );
  const [backChecked, setBackChecked] = useState<any>(false);

  const [genderActions, setGenderActions] = useState<{
    [key: string]: CheckActionItem;
  }>({
    "1": {
      checked: false,
      name: "male",
      onCheckedChange: (checkedFlag) => {},
    },
    "2": {
      checked: false,
      name: "female",
      onCheckedChange: (checkedFlag) => {},
    },
  });

  const columns: CustomColumn[] = useMemo(
    () => [
      {
        id: "name",
        renderHeader: (info) => {
          return <span>{t("driver_name")}</span>;
        },
        renderCell: ({ row }) => {
          return (
            <RImageName
              onClick={() =>
                navigate(`${row.original.id}?driver=${row?.original.name}`)
              }
              className="hover:text-muted-foreground hover:underline cursor-pointer"
              name={row.original.name}
              image={row?.original?.image}
            />
          );
        },
      },
      {
        id: "phone_number",
        renderHeader: (info) => {
          return <span>{t("phone_number")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.phone_number}</span>;
        },
      },
      {
        id: "email",
        renderHeader: (info) => {
          return <span>{t("email")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.email}</span>;
        },
      },
      {
        id: "isOnline",
        renderHeader: (info) => {
          return (
            <RFlex className="items-center gap-1">
              <span>{t("active_status")}</span>
              <RCheckDropdown
                triggerComponent={
                  <Button variant="ghost" className="p-0 hover:bg-transparent">
                    <Filter className="w-4 h-4" />
                  </Button>
                }
                // KeepActiveItemChecked
                closeOnSelect={true}
                side="bottom"
                align="center"
                actions={genderActions}
                setActions={setGenderActions}
              />
            </RFlex>
          );
        },
        renderCell: ({ row }) => {
          return <span>{row.original.gender}</span>;
        },
      },
      {
        id: "date_of_birth",
        renderHeader: (info) => {
          return (
            <RFlex className="gap-2 items-center">
              <span>{t("date_of_birth")}</span>
              <RDateFilter
                backChecked={backChecked}
                setBackChecked={setBackChecked}
              />
            </RFlex>
          );
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.date_of_birth}</span>;
        },
      },
      {
        id: "join_date",
        renderHeader: (info) => {
          return <span>{t("join_date")}</span>;
        },
        renderCell: ({ row }) => {
          return <span>{row.original?.join_date}</span>;
        },
      },
    ],
    [t, genderActions,backChecked]
  );

  const records = useMemo(
    () => ({
      columns,
      data: customers,
    }),
    [columns]
  );

  return (
    <RFlex className="flex-col gap-6">
      <RSearchInput
        searchData={searchData}
        handleSearchClicked={handleSearchClicked}
        handleDataChanged={(data) => setSearchData(data)}
        placeholder="search_for_name_or_number"
      />
      <RPaginateTable
        Records={records}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
        paginationContainerClassName="justify-end"
      />
    </RFlex>
  );
};

export default CustomersLister;
