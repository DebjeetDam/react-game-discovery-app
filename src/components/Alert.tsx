import { ReactNode } from "react";

interface Props {
  //pass HTML content
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div onClick={onClose} className="alert alert-primary">
      {children}
    </div>
  );
};

export default Alert;
