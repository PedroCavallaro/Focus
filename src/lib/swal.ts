import Swal from "sweetalert2";

const ErrorToast = Swal.mixin({
    toast: true,
    customClass: "mt-16 h-16  text-sm p-0 animate-error_toast hover:hidden ",
    position: "top-right",
    animation: false,
    didRender(popup) {
        popup.onclick = () => Swal.close();
    },

    showConfirmButton: false,
    timerProgressBar: true,
    // didOpen: (toast) => {
    //     toast.onmouseenter = Swal.stopTimer;
    //     toast.onmouseleave = Swal.resumeTimer;
    // },
});

export const showToast = (error: string) => {
    ErrorToast.fire({
        icon: "error",
        title: error,
    });
};
