const BASE = "/hiven-presentation";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 28, className = "" }: LogoMarkProps) {
  return (
    <img
      src={`${BASE}/images/logo-mark.png`}
      alt="Hiven"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

interface LogoWordmarkProps {
  height?: number;
  className?: string;
}

export function LogoWordmark({ height = 24, className = "" }: LogoWordmarkProps) {
  const width = Math.round(height * 4);
  return (
    <img
      src={`${BASE}/images/logo-wordmark.png`}
      alt="Hiven"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

interface LogoFullProps {
  width?: number;
  height?: number;
  className?: string;
}

export function LogoFull({ width = 120, height = 120, className = "" }: LogoFullProps) {
  return (
    <img
      src={`${BASE}/images/logo-full.png`}
      alt="Hiven"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

interface HivenLogoProps {
  size?: number;
  className?: string;
}

export function HivenLogo({ size = 28, className = "" }: HivenLogoProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <img
        src={`${BASE}/images/logo-mark.png`}
        alt=""
        width={size}
        height={size}
        style={{ objectFit: "contain" }}
      />
      <img
        src={`${BASE}/images/logo-wordmark.png`}
        alt="Hiven"
        width={Math.round(size * 4)}
        height={size}
        style={{ objectFit: "contain", marginLeft: 2 }}
      />
    </div>
  );
}
