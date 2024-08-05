import React, { createContext, useContext } from 'react';
import Swal from 'sweetalert2';

const SweetAlertContext = createContext();

export const useSweetAlert = () => useContext(SweetAlertContext);

export const SweetAlertProvider = ({ children }) => {
  const toastAlert = (direction="top-end", iconname, titlename) => {
    const Toast = Swal.mixin({
        toast: true,
        position: direction,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: iconname,
        title: titlename
      });
  }


  const normalALert = (iconname, title, text, confirm=false) => {
    Swal.fire({
        title: title,
        text: text,
        icon: iconname,
        showConfirmButton: confirm,
    });
  };

  const githubLinks = () => {
    Swal.fire({
      title: "ML and DS Models!!!",
      text: "Click the Github button to access the Machine Learning (ML) and Data Science/Analysis (DS) Models, The Models are in full capacity. You are given this option as I am working to sort the hosting of these models, Keep updated.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Visit Github",
      cancelButtonText: "Continue to Portfolio"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://github.com/michaeldouglasvg?tab=repositories";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Navigating to Portfolio", "You can always visit Github later!", "success");
      }
    });
  }

//   const saveChangesDialog = () => {
//     Swal.fire({
//         title: "Do you want to save the changes?",
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: "Save",
//         denyButtonText: `Don't save`
//         }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire("Saved!", "", "success");
//         } else if (result.isDenied) {
//             Swal.fire("Changes are not saved", "", "info");
//         }
//     });
//   }

//   const modalCustomeImage = () => {
//     Swal.fire({
//         title: "Sweet!",
//         text: "Modal with a custom image.",
//         imageUrl: "https://unsplash.it/400/200",
//         imageWidth: 400,
//         imageHeight: 200,
//         imageAlt: "Custom image"
//       });
//   }


//   const enterInputType = async () => {
//     const { value: email } = await Swal.fire({
//         title: "Input email address",
//         input: "email",
//         inputLabel: "Your email address",
//         inputPlaceholder: "Enter your email address"
//       });
//       if (email) {
//         Swal.fire(`Entered email: ${email}`);
//       }
//   }

//   const otpSendVerification = async () => {
//     const { value: password } = await Swal.fire({
//         title: "Enter your password",
//         input: "password",
//         inputLabel: "Password",
//         inputPlaceholder: "Enter your password",
//         inputAttributes: {
//           maxlength: "10",
//           autocapitalize: "off",
//           autocorrect: "off"
//         }
//       });
//       if (password) {
//         Swal.fire(`Entered password: ${password}`);
//       }
//   }

//   const locationSelect = async () => {
//     const { value: fruit } = await Swal.fire({
//         title: "Select field validation",
//         input: "select",
//         inputOptions: {
//           Fruits: {
//             apples: "Apples",
//             bananas: "Bananas",
//             grapes: "Grapes",
//             oranges: "Oranges"
//           },
//           Vegetables: {
//             potato: "Potato",
//             broccoli: "Broccoli",
//             carrot: "Carrot"
//           },
//           icecream: "Ice cream"
//         },
//         inputPlaceholder: "Select a fruit",
//         showCancelButton: true,
//         inputValidator: (value) => {
//           return new Promise((resolve) => {
//             if (value === "oranges") {
//               resolve();
//             } else {
//               resolve("You need to select oranges :)");
//             }
//           });
//         }
//       });
//       if (fruit) {
//         Swal.fire(`You selected: ${fruit}`);
//       }
//   }

//   const imageUpload = async () => {
//     const { value: file } = await Swal.fire({
//         title: "Select image",
//         input: "file",
//         inputAttributes: {
//           "accept": "image/*",
//           "aria-label": "Upload your profile picture"
//         }
//       });
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           Swal.fire({
//             title: "Your uploaded picture",
//             imageUrl: e.target.result,
//             imageAlt: "The uploaded picture"
//           });
//         };
//         reader.readAsDataURL(file);
//       }
//   }

  const value = {
    toastAlert, normalALert, githubLinks
  };

  return (
    <SweetAlertContext.Provider value={value}>
      {children}
    </SweetAlertContext.Provider>
  );
};
