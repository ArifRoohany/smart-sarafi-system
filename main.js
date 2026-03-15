document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       نمایش / مخفی کردن پسورد
    =============================== */

    window.togglePassword = function () {

        const input = document.getElementById("passwordInput");
        const icon = document.getElementById("passwordIcon");

        // اگر عناصر وجود نداشتند
        if (!input || !icon) return;

        // تغییر نوع input
        if (input.type === "password") {

            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");

        }
    };



    /* ===============================
       چارت تراکنش‌ها
    =============================== */

    const transactionCanvas = document.getElementById("transactionChart");

    if (transactionCanvas) {

        const ctx = transactionCanvas.getContext("2d");

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "شنبه",
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه"
                ],

                datasets: [{

                    label: "تراکنش‌ها",

                    data: [12, 15, 8, 20, 10, 7, 5],

                    borderColor: "hsl(209,87%,40%)",
                    backgroundColor: "rgba(29,78,216,0.2)",

                    tension: 0.4,
                    fill: true,
                    pointRadius: 5

                }]
            },

            options: {

                responsive: true,
                maintainAspectRatio: false

            }

        });

    }



    /* ===============================
       چارت کاربران
    =============================== */

    const customerCanvas = document.getElementById("customerChart");

    if (customerCanvas) {

        const ctx = customerCanvas.getContext("2d");

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "شنبه",
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه"
                ],

                datasets: [{

                    label: "کاربران ثبت‌شده",

                    data: [12, 15, 8, 20, 10, 7, 5],

                    borderColor: "hsl(209,87%,40%)",
                    backgroundColor: "rgba(29,78,216,0.2)",

                    tension: 0.4,
                    fill: true

                }]
            },

            options: {

                responsive: true,
                maintainAspectRatio: false

            }

        });

    }



    /* ===============================
       فعال شدن لینک سایدبار
    =============================== */

    const sidebarLinks = document.querySelectorAll("aside nav a");

    sidebarLinks.forEach(link => {

        link.addEventListener("click", function () {

            // حذف active از همه لینک‌ها
            sidebarLinks.forEach(l => l.classList.remove("active-link"));

            // اضافه کردن active به لینک کلیک شده
            this.classList.add("active-link");

        });

    });



    /* ===============================
       مودال افزودن کاربر
    =============================== */

    const addCustomerBtn = document.getElementById("addCustomerBtn");
    const addCustomerModal = document.getElementById("addCustomerModal");
    const closeCustomerModal = document.getElementById("closeModal");
    const customerForm = document.getElementById("customerForm");

    // باز کردن مودال
    if (addCustomerBtn && addCustomerModal) {

        addCustomerBtn.addEventListener("click", () => {

            addCustomerModal.classList.remove("hidden");

        });

    }

    // بستن مودال
    if (closeCustomerModal && addCustomerModal) {

        closeCustomerModal.addEventListener("click", () => {

            addCustomerModal.classList.add("hidden");

        });

    }

    // ارسال فرم
    if (customerForm && addCustomerModal) {

        customerForm.addEventListener("submit", function (e) {

            e.preventDefault();

            addCustomerModal.classList.add("hidden");

            customerForm.reset();

        });

    }



    /* ===============================
       مودال افزودن تراکنش
    =============================== */

    const addTransactionBtn = document.getElementById("addTransactionBtn");
    const transactionModal = document.getElementById("addTransactionModal");
    const saveTransactionBtn = document.getElementById("saveTransaction");

    // باز کردن مودال
    if (addTransactionBtn && transactionModal) {

        addTransactionBtn.addEventListener("click", () => {

            transactionModal.style.display = "flex";

        });

    }

    // بستن مودال
    if (closeCustomerModal && transactionModal) {

        closeCustomerModal.addEventListener("click", () => {

            transactionModal.style.display = "none";

        });

    }

    // ذخیره تراکنش
    if (saveTransactionBtn && transactionModal) {

        saveTransactionBtn.addEventListener("click", () => {

            transactionModal.style.display = "none";

        });

    }

});