import Link from "next/link";
import styles from "./styles.module.css";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  theme?: "primary" | "secondary";
};

export function LinkText({ className, theme, ...props }: Props) {
  return (
    <Link
      {...props}
      className={clsx(styles.link, theme && styles[theme], className)}
    />
  );
}
