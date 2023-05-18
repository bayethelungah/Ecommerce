import * as React from "react";
import cn from "@/lib/class";

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "p-2 relative before:absolute before:bg-primary before:w-full before:h-1/2 before:top-1/2 rounded-lg before:left-0 before:rounded-lg after:absolute after:top-1/2 after:w-full after:bg-primary after:h-1/4 after:left-0 shadow-lg borde",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
