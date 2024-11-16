import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import RButton from "@/RComponents/RButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RPaginationProps } from "@/types/index.type";

const RPagination: React.FC<RPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  paginationContainerClassName,
  paginationContentClassName,
}) => {
  console.log("rerendering: pagination rerendered");
  const createPaginationItems = () => {
    const items = [];
    const leftRange = Math.max(currentPage - 1, 1);
    const rightRange = Math.min(currentPage + 1, totalPages);

    // "Previous" button
    items.push(
      <PaginationItem key="prev">
        <RButton
          variant="ghost"
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          text="previous"
          Icon={ChevronLeft}
          disabled={currentPage === 1}
        />
      </PaginationItem>
    );

    // First page and ellipsis if necessary
    if (leftRange > 1) {
      items.push(
        <PaginationItem key="first">
          <PaginationLink
            // href="#"
            onClick={() => onPageChange && onPageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (leftRange > 2) {
        items.push(
          <PaginationItem key="ellipsis-left">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    // Pages in range
    for (let page = leftRange; page <= rightRange; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            // href="#"
            onClick={() => onPageChange && onPageChange(page)}
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Last page and ellipsis if necessary
    if (rightRange < totalPages) {
      if (rightRange < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis-right">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key="last">
          <PaginationLink
            // href="#"
            onClick={() => onPageChange && onPageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // "Next" button
    items.push(
      <PaginationItem key="next">
        <RButton
          variant="ghost"
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          text="next"
          Icon={ChevronRight}
          iconRight
          disabled={currentPage === totalPages}
        />
      </PaginationItem>
    );

    return items;
  };

  return (
    <Pagination className={paginationContainerClassName}>
      <PaginationContent className={paginationContentClassName}>
        {createPaginationItems()}
      </PaginationContent>
    </Pagination>
  );
};

export default React.memo(RPagination);
