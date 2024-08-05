import React, { useEffect } from 'react';
import Swal from 'sweetalert2'

function DisableRightClick({ children }) {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      event.stopPropagation();
      Swal.fire({
        title: 'Downloading Cert!!!',
        text: "I kindly request that you utilize the designated download button for certificate retrieval due to our security protocols. Unfortunately, drag-and-drop and right-click actions are restricted on this page. Please provide your email address through the download button, and your certificates will be promptly delivered to you via email.",
        icon: 'info',
        confirmButtonText: 'Got it'
      })
    };

    const handleDragStart = (event) => {
      event.preventDefault();
    };

    const handleDrop = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('drop', handleDrop);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('drop', handleDrop);
    };
  }, []);

  return <div>{children}</div>;
}

export default DisableRightClick;