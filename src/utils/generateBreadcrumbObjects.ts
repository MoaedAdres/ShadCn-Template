import { BreadCrumbObject } from "@/types/index.type";
import { Location, Params } from "react-router-dom";

export const generateBreadcrumbObjects = (
  location: Location,
  pathParams: Params
): BreadCrumbObject[] => {
  // Extract path and query parameters
  const pathNameArray = location.pathname.slice(1).split("/");
  const queryParamValues = location.search
    .slice(1)
    .split("&")
    .map((item) => item.split("=")[1]);

  // Clone pathParams to safely modify it
  const remainingPathParams = { ...pathParams };

  // Generate breadcrumb objects
  const breadcrumbObjects = pathNameArray.map((pathSegment, index) => {
    // Generate the cumulative path up to the current index
    const path = "/" + pathNameArray.slice(0, index + 1).join("/");

    // Find a matching path parameter key and index
    const { key, queryIndex } = findPathParamKeyIndex(pathSegment, remainingPathParams);

    // Set title based on either the path segment or query parameter value
    const title = queryIndex >= 0 ? queryParamValues[queryIndex] : pathSegment;

    // Remove the matched key from remainingPathParams if found
    if (key) delete remainingPathParams[key];

    return { title, path };
  });

  console.log("breadcrumb: Path segments:", pathNameArray);
  console.log("breadcrumb: Path parameters:", pathParams);
  console.log("breadcrumb: Query parameter values:", queryParamValues);
  console.log("breadcrumb: Breadcrumb objects:", breadcrumbObjects);

  return breadcrumbObjects;
};

// Helper function to find the path parameter key and its index if it matches the given path segment
const findPathParamKeyIndex = (pathSegment: string, pathParams: Params) => {
  const entries = Object.entries(pathParams);
  const index = entries.findIndex(([_, value]) => value === pathSegment);
  const key = entries[index]?.[0];
  return { key, queryIndex: index };
};
