import { t } from "i18next";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RAlertDialogProps } from "@/types/index.type";

const RAlertDialog: React.FC<RAlertDialogProps> = ({
  component = <Button>{t("Open_Alert_Dialog")}</Button>,
  title = t("Are_you_sure_you_want_to_delete"),
  description = t("This_action_cannot_be_undone"),
  cancelText = t("cancel"),
  cancelClassName,
  confirmText,
  confirmClassName,
  confirmAction = () => {},
  headerItemsPosition = "items-center",
  disableTrigger = false,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={disableTrigger}>
        {component}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className={headerItemsPosition}>
          <AlertDialogTitle className="font-bold text-[16px]">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-end">
          <AlertDialogCancel className={cancelClassName}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => confirmAction()}
            className={confirmClassName}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RAlertDialog;
