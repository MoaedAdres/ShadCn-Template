import { Button } from "@/components/ui/button";
import RButton from "@/RComponents/RButton";
import RCheckDropdown from "@/RComponents/RCheckDropdown";
import RFlex from "@/RComponents/RFlex";
import RImageName from "@/RComponents/RImageName";
import RSearchInput from "@/RComponents/RSearchInput";
import RTable from "@/RComponents/RTable";
import RTooltip from "@/RComponents/RTooltip";
import {
  CheckActionItem,
  CustomColumn,
  TableAction,
  TableRecords,
} from "@/types/index.type";
import { drivers } from "@/Views/Dashboard/Drivers/fakeData";
import { Filter, Info, List, Plus, Rocket, Trash, View } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const DriversLister = () => {
  console.log("rerendering: DriversLister rerendered");
  const [searchData, setSearchData] = useState<string>("");
  const { t } = useTranslation();
  const handleSearchClicked = () => {};
  const navigate = useNavigate();
  // here we don't need to use useMemo even onlineActions is an object because it's a state and react keep tracking and it's know when the
  // object state change and when it's not so event the column depends on it it , columns will only rerendered only if the onlineAcions actually change
  // becuase it's a state
  const [onlineActions, setOnlineActions] = useState<{
    [key: string]: CheckActionItem;
  }>({
    "1": {
      checked: false,
      name: "Online",
      actionTextClass: "text-green-800",
      onCheckedChange: (checkedFlag) => {},
    },
    "2": {
      checked: false,
      name: "Offline",
      actionTextClass: "text-destructive",
      onCheckedChange: (checkedFlag) => {},
    },
  });
  // the normal object we should use use memo with it becuase unlike states, react don't trace normal object so as because columns are a dependancy of the record object
  // each render time column will have a new object reference unless we wrap it with useMemo
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
                closeOnSelect={false}
                side="bottom"
                align="center"
                actions={onlineActions}
                setActions={setOnlineActions}
              />
            </RFlex>
          );
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
    ],
    [t, onlineActions]
  );
  // const data = useMemo(() => drivers, []);
  const actions: TableAction[] = useMemo(
    () => [
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
    ],
    []
  );
  const records = useMemo(
    () => ({
      columns,
      data: drivers,
      actions,
      dropDownContentClassName: "w-fit",
    }),
    [columns, drivers, actions]
  );

  return (
    <RFlex className="flex-col gap-6">
      <RFlex className="w-full justify-between">
        <RSearchInput
          searchData={searchData}
          handleSearchClicked={handleSearchClicked}
          handleDataChanged={(data) => setSearchData(data)}
          placeholder="search_for_name_or_number"
        />
        <RButton
          text="join_requests"
          variant="default"
          Icon={List}
          iconRight
          onClick={() => navigate("join-requests")}
        />
      </RFlex>

      <RTable Records={records} />
    </RFlex>
  );
};

export default DriversLister;
