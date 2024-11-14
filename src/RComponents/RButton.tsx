import { Button } from "@/components/ui/button";
import RFlex from "@/RComponents/RFlex";
import { Loader } from "lucide-react";
import { RNewButtonProps } from "@/types/index.type";

const RNewButton: React.FC<RNewButtonProps> = ({
  className,
  disabled = false,
  loading = false,
  onClick,
  hidden = false,
  Icon,
  text,
  type = "button",
  key,
  iconRight = false,
  variant = "default",
  textClassName,
  size = "default",
}) => {
  return (
    <Button
      key={key || ""}
      className={className}
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
      hidden={hidden}
      size={size}
    >
      {loading ? (
        <RFlex className="justify-center items-center">
          {text && <span>{text}</span>}
          <Loader className="w-4 h-4" />
        </RFlex>
      ) : Icon && !text ? (
        <Icon className="w-4 h-4" />
      ) : text && Icon ? (
        <>
          {iconRight ? (
            <RFlex className="gap-[5px]">
              {text}
              <Icon className="w-4 h-4" />
            </RFlex>
          ) : (
            <>
              <Icon className="w-4 h-4" />
              {text}
            </>
          )}
        </>
      ) : (
        <span className={textClassName}>{text}</span>
      )}
    </Button>
  );
};

export default RNewButton;
