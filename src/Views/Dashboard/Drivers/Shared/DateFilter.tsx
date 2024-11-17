import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import RButton from "@/RComponents/RButton";
import RFlex from "@/RComponents/RFlex";
import RInput from "@/RComponents/RInput";
import RPopover from "@/RComponents/RPopover";
import {
  ArrowBigDownIcon,
  ArrowBigRight,
  Calendar,
  Filter,
} from "lucide-react";
import React, { Dispatch, useState } from "react";
import { useTranslation } from "react-i18next";

const DateFilter = ({
  backChecked,
  setBackChecked,
  triggerClassName,
  orentation = "vertical",
}: {
  backChecked: boolean;
  setBackChecked: React.Dispatch<React.SetStateAction<any>>;
  triggerClassName?: string;
  orentation?: "horizontal" | "vertical";
}) => {
  const { t } = useTranslation();
  const [frontChecked, setFronChecked] = useState<any>(backChecked);
  const isMobile = useIsMobile();
  const currenOorentation = isMobile ? "vertical" : orentation;
  return (
    <RPopover
      triggerComponent={<Filter className={cn("w-3 h-3", triggerClassName)} />}
      contentClassName="w-fit"
      contentComponent={
        <RFlex className="flex-col">
          <RFlex className="gap-1">
            <Checkbox
              id="range"
              checked={frontChecked}
              onCheckedChange={(checked) => setFronChecked(checked)}
            />
            <Label htmlFor="range" className="cursor-pointer">
              {t("range")}
            </Label>
          </RFlex>
          <RFlex className="flex-col items-end">
            <RFlex
              className={`${currenOorentation == "vertical" ? "flex-col" : ""} gap-1 items-center`}
            >
              <RInput type="date" />
              {frontChecked && (
                <>
                  {currenOorentation == "vertical" ? (
                    <ArrowBigDownIcon />
                  ) : (
                    <ArrowBigRight />
                  )}
                  <RInput type="date" />
                </>
              )}
            </RFlex>
            <RButton
              text="filter"
              onClick={() => {
                setBackChecked(frontChecked);
              }}
            />
          </RFlex>
        </RFlex>
      }
    />
  );
};

export default DateFilter;
