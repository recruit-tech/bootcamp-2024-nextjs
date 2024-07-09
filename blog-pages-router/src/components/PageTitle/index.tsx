import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export function PageTitle({ children }: Props) {
  return <h2 className={styles.heading}>{children}</h2>;
}
