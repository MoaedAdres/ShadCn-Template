import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbObjects } from "@/utils/generateBreadcrumbObjects";
import { capitalizeFirstLetter } from "@/utils/helperFunctions";
import { useLocation, useParams } from "react-router-dom";

const RBreadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const breadcrumbObjects = generateBreadcrumbObjects(location, params);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbObjects.map((breadcrumbItem, index) =>
          index != breadcrumbObjects.length - 1 ? (
            <>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={breadcrumbItem.path}>
                  {capitalizeFirstLetter(breadcrumbItem.title)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>
                {capitalizeFirstLetter(breadcrumbItem.title)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default RBreadcrumb;
