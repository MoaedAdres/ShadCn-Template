import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbFromLocation } from "@/utils/generateBreadcrumbObjects";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const RBreadcrumb = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const params = useParams();
  const breadcrumbObjects = generateBreadcrumbFromLocation(location, params);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbObjects.map((breadcrumbItem, index) =>
          index != breadcrumbObjects.length - 1 ? (
            <>
              <BreadcrumbItem className="hidden md:block">
                <Link to={breadcrumbItem.path}>{t(breadcrumbItem.title)}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>{t(breadcrumbItem.title)}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default RBreadcrumb;
