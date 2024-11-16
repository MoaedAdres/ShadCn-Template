import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ExpandedState,
  getExpandedRowModel,
  ColumnDef,
  Row,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
  HeaderContext,
  CellContext,
} from "@tanstack/react-table";
import RDropdown from "@/RComponents/RDropDown";
import RAlertDialog from "@/RComponents/RAlertDialog";
import RTooltip from "@/RComponents/RTooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { RTableProps, TableAction } from "@/types/index.type";
import { cn } from "@/lib/utils";

interface ActionTypes {
  LOADING: string;
  DISABLED: string;
  NONE: string;
}

const RTable: React.FC<RTableProps> = ({
  Records,
  emptyData,
  callBack,
  finishedOperation,
  setFinishedOperation,
  loading,
}) => {
  console.log("rerendering: table rerendered");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [actionsLoading, setActionsLoading] = React.useState<
    Record<string, string>
  >({});
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const actionTypes: ActionTypes = {
    LOADING: "loading",
    DISABLED: "disabled",
    NONE: "none",
  };

  const addToActionLoading = (action: TableAction, row: Row<any>) => {
    setActionsLoading((oldLoadingStatus) => ({
      ...oldLoadingStatus,
      [row.id]: action.name,
    }));
  };

  const checkActionStatus = (action: TableAction, row: Row<any>): string => {
    if (row.id in actionsLoading) {
      return actionsLoading[row.id] === action.name
        ? actionTypes.LOADING
        : actionTypes.DISABLED;
    }
    return actionTypes.NONE;
  };

  const removeActionFromLoading = (id: string) => {
    const objectCopy = { ...actionsLoading };
    delete objectCopy[id];
    setActionsLoading(objectCopy);
  };

  React.useEffect(() => {
    if (finishedOperation) {
      removeActionFromLoading(finishedOperation);
      setFinishedOperation && setFinishedOperation(null);
    }
  }, [finishedOperation]);

  const getCommonPinningStylesForHeaders = (
    column: any
  ): React.CSSProperties => {
    const isPinned = column.getIsPinned();
    return {
      left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
      right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
      opacity: 1,
      top: "-1px",
      position: "sticky" as React.CSSProperties["position"], // Explicitly typing position
      minWidth: Records?.staticColumns ? column.getSize() : undefined,
      zIndex: isPinned ? 20 : 1,
    };
  };

  const getCommonPinningStylesForCells = (column: any): React.CSSProperties => {
    const isPinned = column.getIsPinned();
    return {
      left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
      right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
      opacity: 1,
      position: isPinned
        ? ("sticky" as React.CSSProperties["position"])
        : ("relative" as React.CSSProperties["position"]),
      minWidth: Records?.staticColumns ? column.getSize() : undefined,
      height: Records.staticHeight ? Records.staticHeight : undefined,
      //   backgroundColor: "white",
      zIndex: isPinned ? 10 : undefined,
    };
  };

  const columns: ColumnDef<any>[] = Records.columns?.map((columnInfo) => ({
    id: columnInfo?.id ?? undefined,
    accessorKey: columnInfo?.accessorKey ?? undefined,
    header: (info: HeaderContext<any, any>) => columnInfo?.renderHeader(info),
    cell: (info: CellContext<any, any>) => columnInfo?.renderCell(info),
    size: columnInfo.size ? columnInfo?.size : undefined,
  }));
  Records?.actions &&
    Records?.actions?.length > 0 &&
    columns.push({
      id: "actions",
      header: () => <></>,
      cell: (info: CellContext<any, any>) => (
        <div className="flex gap-3 items-center">
          {Records.actions
            ?.filter((action) => !action.inDropdown && !action.hidden)
            .map((action, index) => {
              const iconComponent = (
                <RTooltip
                  triggerComponent={
                    checkActionStatus(action, info.row.original) ===
                    actionTypes.LOADING ? (
                      <div>
                        <i className="spinner-icon" />
                      </div>
                    ) : (
                      action.Icon && (
                        <action.Icon
                          key={index}
                          className={cn(
                            "w-4 h-4",
                            `${action.actionIconClass} cursor-pointer ${checkActionStatus(action, info.row.original) === actionTypes.DISABLED ? "disabled__link" : ""}`
                          )}
                          aria-label={action.name ?? "default"}
                          onClick={() => {
                            if (
                              !action.inDialog &&
                              checkActionStatus(action, info.row.original) !==
                                actionTypes.DISABLED
                            ) {
                              action.onClick(info);
                              if (
                                action.needLoader &&
                                checkActionStatus(action, info.row.original) ===
                                  actionTypes.NONE
                              ) {
                                addToActionLoading(action, info.row.original);
                              }
                            }
                          }}
                        />
                      )
                    )
                  }
                  tooltipText={action.name}
                />
              );
              return action.inDialog ? (
                <RAlertDialog
                  key={index}
                  component={iconComponent}
                  disableTrigger={
                    checkActionStatus(action, info.row.original) ===
                      actionTypes.LOADING ||
                    checkActionStatus(action, info.row.original) ===
                      actionTypes.DISABLED
                  }
                  title={action.dialogTitle && action.dialogTitle(info)}
                  description={
                    action.dialogDescription && action.dialogDescription(info)
                  }
                  cancelText={action.cancel}
                  confirmText={action.confirm}
                  loading={action.loading}
                  confirmAction={() => {
                    action.confirmAction && action.confirmAction(info);
                    if (action.needLoader)
                      addToActionLoading(action, info.row.original);
                  }}
                  disabled={action.disabled}
                  headerItemsPosition={action.headerItemsPosition}
                />
              ) : (
                iconComponent
              );
            })}
          {!Records?.removeDropDownActions &&
            Records.actions &&
            Records.actions.some((action) => action.inDropdown) && (
              <RDropdown
                triggerComponent={
                  Records.triggerDropDownComponent &&
                  Records.triggerDropDownComponent(info)
                }
                onPointerDownHandler={() =>
                  Records.onPointerDownHandler &&
                  Records.onPointerDownHandler(info)
                }
                side={Records.dropDownSide ?? "bottom"}
                align={Records.dropDownAlign ?? "end"}
                contentClassName={Records.dropDownContentClassName}
                actions={Records.actions
                  .filter((action) => action.inDropdown && !action.hidden)
                  .map((action) => ({
                    ...action,
                    onClick: () => action.onClick(info),
                  }))}
              />
            )}
        </div>
      ),
    });

  const data = Records.data ?? [];

  const table = useReactTable({
    data: data,
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      expanded,
    },
    manualPagination: true,
  });

  React.useEffect(() => {
    callBack && callBack(table);
  }, [table]);

  return (
    <div
      className={`rounded-md border w-full max-md:overflow-auto max-md:max-w-[700px]`}
      style={{ position: "relative", height: loading ? "320px" : "" }}
    >
      {loading && (
        <div style={{ width: "100%", position: "absolute", marginTop: "20px" }}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} style={{ marginBottom: "10px", width: "100%" }}>
              <Skeleton className="w-full h-6" />
            </div>
          ))}
        </div>
      )}
      <Table>
        <TableHeader className="bg-muted">
          {table.getHeaderGroups()?.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers?.map((header) => (
                <TableHead
                  // style={getCommonPinningStylesForHeaders(header.column)}
                  key={header.id}
                  className="text-foreground   font-weight-bold"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {loading && <div style={{ height: "260px" }}></div>}
        {!loading && (
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows?.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells()?.map((cell) => (
                    <TableCell
                      // style={getCommonPinningStylesForCells(cell.column)}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={Records.columns.length}>
                  {emptyData}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
    </div>
  );
};

export default React.memo(RTable);
