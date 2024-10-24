import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full ${variant} 
      ${full && "w-full"}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};

export default Button;
