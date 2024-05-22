import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export function PageMain({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}
