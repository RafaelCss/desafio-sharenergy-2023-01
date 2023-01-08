import { Modal as ModalMod } from './style';

interface IPageLogin {
  children: React.ReactElement;
  handleOk: () => void;
  visivel: boolean;
  handleCancel: () => void;
  title: React.ReactNode;
}
function Modal({ children, handleOk, visivel, handleCancel, title }: IPageLogin) {
  return (
    <ModalMod
      title={title}
      onOk={handleOk}
      open={visivel}
      onCancel={handleCancel}
      destroyOnClose={false}
    >
      {children}
    </ModalMod>
  );
}

export default Modal;
