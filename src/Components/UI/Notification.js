import React from "react";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Snackbar from '@mui/material/Snackbar';

const Notification = ({open , onClose, action , message , severity}) => {
  return (
  <>
    <Snackbar
  open={open}
  severity={severity}
  autoHideDuration={2000}
  onClose={() => onClose(false)}
  message={message}
  action={action}
/>
  </>
    // <>
    //   <ToastContainer
    //     position="top-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    // </>
  );
};

export default Notification;
