import RButton from "@/RComponents/RButton";
import RFlex from "@/RComponents/RFlex";
import RImageName from "@/RComponents/RImageName";
import RSearchInput from "@/RComponents/RSearchInput";
import RTable from "@/RComponents/RTable";
import RTooltip from "@/RComponents/RTooltip";
import { CustomColumn, TableAction, TableRecords } from "@/types/index.type";
import { drivers } from "@/Views/Dashboard/Drivers/fakeData";
// import { t } from "i18next";
import { Info, List, Rocket, Trash, View } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const DriversLister = () => {
  const [searchData, setSearchData] = useState<string>("");
  const { t } = useTranslation();
  const handleSearchClicked = () => {};
  const navigate = useNavigate();
  const columns: CustomColumn[] = [
    {
      id: "name",
      renderHeader: (info) => {
        return <span>{t("driver_name")}</span>;
      },
      renderCell: ({ row }) => {
        return (
          <RImageName name={row.original.name} image={row?.original?.image} />
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
        return <span>{t("active_status")}</span>;
      },
      renderCell: ({ row }) => {
        return row?.original?.isOnline ? (
          <p className="flex gap-1   items-center ">
            <span className="text-green-800">{t("Online")} </span>
            <RTooltip
              triggerComponent={<Info className="w-3 h-3" />}
              triggerClassName="mt-1"
              tooltipText={row.original?.vehicle_type}
            />
          </p>
        ) : (
          <span className="text-destructive">{t("Offline")}</span>
        );
      },
    },
    {
      id: "active_in_shift",
      renderHeader: (info) => {
        return <span>{t("active_in_a_shift")}</span>;
      },
      renderCell: ({ row }) => {
        return row?.original?.active_status ? (
          <RTooltip
            triggerComponent={
              <span className="text-green-800">{t("Active")} </span>
            }
            triggerClassName="mt-1"
            tooltipText={row.original?.shift_number}
          />
        ) : (
          <span className="text-destructive">{t("Inactive")}</span>
        );
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
    {
      id: "evaluation",
      renderHeader: (info) => {
        return <span>{t("evaluation")}</span>;
      },
      renderCell: ({ row }) => {
        return <span>{row.original?.evaluation}</span>;
      },
    },
  ];
  const actions: TableAction[] = [
    {
      name: "View",
      Icon: View,
      inDropdown: true,
      onClick: ({ row }) => {
        navigate(`${row.original.id}?driver=${row?.original.name}`);
      },
    },
    {
      name: "Delete",
      Icon: Trash,
      inDropdown: true,
      onClick: ({ row }) => {
        navigate(`drivers/${row.original.id}?driver=${row?.original.name}`);
      },
      actionIconClass: "text-destructive",
      actionTextClass: "text-destructive",
    },
  ];
  const records: TableRecords = {
    columns,
    data: drivers,
    actions: actions,
    dropDownContentClassName: "w-fit",
  };
  return (
    <RFlex className="flex-col gap-6">
      <RFlex className="w-full justify-between">
        <RSearchInput
          searchData={searchData}
          handleSearchClicked={handleSearchClicked}
          handleDataChanged={(data) => setSearchData(data)}
          placeholder="search_for_name_or_number"
        />
        <RButton text="join_requests" variant="default" Icon={List} iconRight />
      </RFlex>

      <RTable Records={records} />
    </RFlex>
  );
};

export default DriversLister;
