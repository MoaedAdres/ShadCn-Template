import ukFlag from "@/assets/icons/uk-flag.png";
import denmarkFlag from "@/assets/icons/denmark-flag.webp";
import { ActionItem } from "@/types/index.type";
const LangElement = ({
  title,
  img,
  className,
}: {
  title: string;
  img: any;
  className?: string;
}) => {
  return (
    <>
      <img src={img} className="w-3 h-3 opacity-85" />
      <span>{title}</span>
    </>
  );
};
export const languages: ActionItem[] = [
  {
    name: "en",
    Icon: ukFlag,
    component: <LangElement title="en" img={ukFlag} />,
    extraValue: "en",
  },
  {
    name: "dn",
    Icon: denmarkFlag,
    component: <LangElement title="dn" img={denmarkFlag} />,
    extraValue: "dn",
  },
];
