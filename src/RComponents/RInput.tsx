import { Input } from "@/components/ui/input";
import { RLoaderInputProps } from "@/types/index.type";
import { Loader } from "lucide-react";

const RLoaderInput: React.FC<RLoaderInputProps> = ({
  className,
  inputClassName,
  isLoading,
  inputError,
  ...props
}) => {
  return (
    <div className={`relative ${className || ""}`}>
      <Input
        {...props}
        className={`${inputError ? " outline-none shadow-[0px_0px_5px_0px_#dd0000]" : ""} ${inputClassName || ""}`}
      />
      {isLoading && <Loader className={`fa-sm right-3 top-1/2 absolute`} />}
    </div>
  );
};

export default RLoaderInput;
