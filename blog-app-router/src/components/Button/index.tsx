import clsx from "clsx";
import styles from "./styles.module.css";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  theme?: "primary" | "secondary";
};

export function Button({ className, theme, type, ...props }: Props) {
  return (
    <button
      {...props}
      type={type ?? "submit"}
      className={clsx(styles.button, theme && styles[theme], className)}
    />
  );
}
