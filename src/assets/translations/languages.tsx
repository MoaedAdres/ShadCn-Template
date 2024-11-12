import RFlex from "@/RComponents/RFlex";

export const LangElement = ({
  title,
  img,
  className,
}: {
  title: string;
  img: any;
  className?: string;
}) => {
  return (
    <RFlex className="gap-1 items-center w-full">
      <img src={img} className="w-3 h-3 opacity-85" />
      <span>{title}</span>
    </RFlex>
  );
};
