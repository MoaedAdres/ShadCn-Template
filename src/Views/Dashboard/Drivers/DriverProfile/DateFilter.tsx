import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import RButton from "@/RComponents/RButton";
import RFlex from "@/RComponents/RFlex";
import RInput from "@/RComponents/RInput";
import RPopover from "@/RComponents/RPopover";
import { ArrowBigDownIcon, Calendar, Filter } from "lucide-react";
import React, { Dispatch, useState } from "react";
import { useTranslation } from "react-i18next";

const DateFilter = ({
  backChecked,
  setBackChecked,
}: {
  backChecked: boolean;
  setBackChecked: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { t } = useTranslation();
  const [frontChecked, setFronChecked] = useState<any>(backChecked);
  return (
    <RPopover
      triggerComponent={<Filter className="w-3 h-3" />}
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
          <RFlex className="flex-col gap-1 items-center">
            <RInput type="date" />
            {frontChecked && (
              <>
                <ArrowBigDownIcon />
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
      }
    />
  );
};

export default DateFilter;
