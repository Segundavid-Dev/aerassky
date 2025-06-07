import type { ButtonType } from "../../types";

export default function Button({ children, className }: ButtonType) {
  return <button className={className}>{children}</button>;
}
