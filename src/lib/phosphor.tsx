import dynamic from "next/dynamic";
import type { IconProps } from "@phosphor-icons/react";

type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

interface PIProps extends Partial<IconProps> {
  size?: number;
  color?: string;
  weight?: IconWeight;
  className?: string;
}

function createIcon(importFn: () => Promise<Record<string, React.ComponentType<IconProps>>>) {
  const DynIcon = dynamic(
    () => importFn().then((mod) => ({ default: Object.values(mod)[0] })),
    { ssr: false }
  );
  const Icon = ({ size = 20, color = "currentColor", weight = "regular", className = "" }: PIProps) => (
    <span style={{ color, display: "inline-flex", lineHeight: 0 }}>
      <DynIcon size={size} weight={weight} className={className} />
    </span>
  );
  Icon.displayName = "PhosphorIcon";
  return Icon;
}

export const MapPin = createIcon(() => import("@phosphor-icons/react/dist/icons/MapPin"));
export const Sparkle = createIcon(() => import("@phosphor-icons/react/dist/icons/Sparkle"));
export const Compass = createIcon(() => import("@phosphor-icons/react/dist/icons/Compass"));
export const UserCircle = createIcon(() => import("@phosphor-icons/react/dist/icons/UserCircle"));
export const UsersThree = createIcon(() => import("@phosphor-icons/react/dist/icons/UsersThree"));
export const Star = createIcon(() => import("@phosphor-icons/react/dist/icons/Star"));
export const BookmarkSimple = createIcon(() => import("@phosphor-icons/react/dist/icons/BookmarkSimple"));
export const Heart = createIcon(() => import("@phosphor-icons/react/dist/icons/Heart"));
export const ChatCircle = createIcon(() => import("@phosphor-icons/react/dist/icons/ChatCircle"));
export const ShareFat = createIcon(() => import("@phosphor-icons/react/dist/icons/ShareFat"));
export const CaretRight = createIcon(() => import("@phosphor-icons/react/dist/icons/CaretRight"));
export const ArrowRight = createIcon(() => import("@phosphor-icons/react/dist/icons/ArrowRight"));
export const Download = createIcon(() => import("@phosphor-icons/react/dist/icons/Download"));
export const Check = createIcon(() => import("@phosphor-icons/react/dist/icons/Check"));
export const MagnifyingGlass = createIcon(() => import("@phosphor-icons/react/dist/icons/MagnifyingGlass"));
export const FunnelSimple = createIcon(() => import("@phosphor-icons/react/dist/icons/FunnelSimple"));
export const Clock = createIcon(() => import("@phosphor-icons/react/dist/icons/Clock"));
export const CalendarCheck = createIcon(() => import("@phosphor-icons/react/dist/icons/CalendarCheck"));
export const Rows = createIcon(() => import("@phosphor-icons/react/dist/icons/Rows"));
export const GlobeHemisphereWest = createIcon(() => import("@phosphor-icons/react/dist/icons/GlobeHemisphereWest"));
export const Crosshair = createIcon(() => import("@phosphor-icons/react/dist/icons/Crosshair"));
export const SealCheck = createIcon(() => import("@phosphor-icons/react/dist/icons/SealCheck"));
export const ShareNetwork = createIcon(() => import("@phosphor-icons/react/dist/icons/ShareNetwork"));
export const MusicNote = createIcon(() => import("@phosphor-icons/react/dist/icons/MusicNote"));
export const ForkKnife = createIcon(() => import("@phosphor-icons/react/dist/icons/ForkKnife"));
export const PaintBrush = createIcon(() => import("@phosphor-icons/react/dist/icons/PaintBrush"));
export const Sun = createIcon(() => import("@phosphor-icons/react/dist/icons/Sun"));
export const Moon = createIcon(() => import("@phosphor-icons/react/dist/icons/Moon"));
export const Cookie = createIcon(() => import("@phosphor-icons/react/dist/icons/Cookie"));
export const ShieldCheck = createIcon(() => import("@phosphor-icons/react/dist/icons/ShieldCheck"));
