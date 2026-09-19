import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-16 w-16",
  md: "h-20 w-20",
  lg: "h-28 w-28",
};

export function Logo({ size = "md" }: LogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden bg-black p-1 ${sizes[size]}`}
    >
      <Image
        src={assetPath("/images/iconic-p-solution-logo-transparent.png")}
        alt="Iconic P Solution"
        fill
        sizes="96px"
        className="object-contain p-1"
        priority={size !== "lg"}
      />
    </span>
  );
}
