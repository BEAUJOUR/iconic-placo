import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-14 w-14",
  md: "h-[72px] w-[72px]",
  lg: "h-24 w-24",
};

export function Logo({ size = "md" }: LogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-walnut/10 bg-[#2f2f2f] ${sizes[size]}`}
    >
      <Image
        src={assetPath("/images/iconic-p-solution-logo.jpg")}
        alt="Iconic P Solution"
        fill
        sizes="96px"
        className="scale-[1.42] object-cover"
        priority={size !== "lg"}
      />
    </span>
  );
}
