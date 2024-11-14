import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbFromLocation } from "@/utils/generateBreadcrumbObjects";
import { capitalizeFirstLetter } from "@/utils/helperFunctions";
import { Link, useLocation, useParams } from "react-router-dom";
import { t } from "i18next";
const RBreadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const breadcrumbObjects = generateBreadcrumbFromLocation(location, params);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbObjects.map((breadcrumbItem, index) =>
          index != breadcrumbObjects.length - 1 ? (
            <>
              <BreadcrumbItem className="hidden md:block">
                <Link to={breadcrumbItem.path}>
                  {t(capitalizeFirstLetter(breadcrumbItem.title))}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>
                {t(capitalizeFirstLetter(breadcrumbItem.title))}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default RBreadcrumb;
