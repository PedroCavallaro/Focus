import Swal from "sweetalert2";

const ErrorToast = Swal.mixin({
    toast: true,
    customClass: "mt-16 h-16  text-sm p-0 animate-error_toast hover: ",
    position: "top-right",
    timer: 4000,
    animation: false,
    didOpen(popup) {
        popup.onclick = () => popup.remove();
    },

    showConfirmButton: false,
});

export const showToast = (error: string) => {
    ErrorToast.fire({
        icon: "error",
        title: error,
    });
};
