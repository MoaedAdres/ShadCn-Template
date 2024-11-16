import RFlex from "@/RComponents/RFlex";
import RPagination from "@/RComponents/RPagination";
import RTable from "@/RComponents/RTable";
import { RPaginateTableProps } from "@/types/index.type";

const RPaginateTable = ({
  Records,
  emptyData,
  callBack,
  finishedOperation,
  setFinishedOperation,
  loading,
  currentPage,
  totalPages,
  onPageChange,
  paginationContainerClassName,
  tableContainerClassName,
  paginationContentClassName,
}: RPaginateTableProps) => {
  return (
    <RFlex className="flex-col gap-2 items-end">
      <RTable
        Records={Records}
        loading={loading}
        finishedOperation={finishedOperation}
        setFinishedOperation={setFinishedOperation}
        callBack={callBack}
        emptyData={emptyData}
        tableContainerClassName={tableContainerClassName}
      />
      <RPagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
        paginationContainerClassName={paginationContainerClassName}
        paginationContentClassName={paginationContentClassName}
      />
    </RFlex>
  );
};

export default RPaginateTable;
