import * as React from "react";
import cn from "@/lib/class";

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export default function Container({
  className,
  title,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("p-3 shadow-2xl rounded-lg bg-white", className)}
      {...props}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="text-center flex justify-center items-centers">
        {children}
      </div>
    </div>
  );
}
