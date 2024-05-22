import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

export function ButtonGroup({ children }: Props) {
  return <div className={styles.buttonGroup}>{children}</div>;
}
