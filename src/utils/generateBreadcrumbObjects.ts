import { BreadCrumbObject } from "@/types/index.type";
import { Location, Params } from "react-router-dom";

export const generateBreadcrumbObjects = (
  location: Location,
  params: Params
): any => {
  const paths = location.pathname.split("/");
  console.log("paths", paths, params);
};
