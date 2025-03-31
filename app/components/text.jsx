import { cn } from "@/lib/utils";

const Text = ({ variant = "body1", children, className, ...props }) => {
  const variants = {
    h1: "text-[30px] font-bold md:text-[40px] lg:text-[40px] font-sourcesans",
    h2: "text-[25px] font-semibold md:text-[30px] lg:text-[30px] font-sourcesans",
    h3: "text-[23px] font-semibold md:text-[23px] lg:text-[23px] font-sourcesans",
    h4: "text-xl font-semibold md:text-2xl lg:text-3xl",
    body1: "text-[18px] font-medium",
    b: "text-[16px] font-semibold",
    body2: "text-sm",
    div: "text-[18px] font-medium",
  };

  const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    body1: "p",
    b: "p",
    body2: "p",
    div: "div",
  };

  const Tag = tags[variant];
  const variantClasses = variants[variant];

  return (
    <Tag className={cn(variantClasses, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
