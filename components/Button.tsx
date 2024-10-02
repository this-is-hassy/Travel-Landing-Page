import Image from "next/image";

type ButtonProps = {
  children? : any;
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  className?: string;
}

const Button = ({ type, title, icon, variant, full, className, children }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${className} ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button