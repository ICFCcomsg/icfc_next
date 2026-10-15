import type { ComponentProps } from "react";

/** Page-width wrapper: 24px gutters and the theme's max width per breakpoint. */
export const CONTAINER =
  "w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={className ? `${CONTAINER} ${className}` : CONTAINER} {...props} />;
}
