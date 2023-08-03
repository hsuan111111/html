/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const form = document.getElementById("queryForm");
        const appointmentDetails = document.getElementById("appointmentDetails");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);

            // 在這裡添加查詢邏輯，根據您的需求將查詢條件提交到後端處理查詢，然後更新appointmentDetails

            // 以下是一個示例：假設已有預約明細回傳
            const fakeAppointments = [
                { bookingNumber: "A12345", name: "John Doe", date: "2023-07-31", status: "confirmed" },
                { bookingNumber: "B67890", name: "Jane Smith", date: "2023-08-01", status: "pending" },
            ];

            if (fakeAppointments.length > 0) {
                const table = generateAppointmentTable(fakeAppointments);
                appointmentDetails.innerHTML = "";
                appointmentDetails.appendChild(table);
            } else {
                appointmentDetails.innerHTML = "查無符合條件的預約明細。";
            }
        });

        function generateAppointmentTable(appointments) {
            const table = document.createElement("table");
            table.classList.add("table", "table-striped");
            const headerRow = table.insertRow();
            const headers = ["訂位編號", "姓名", "日期", "狀態"];

            headers.forEach((header) => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });

            appointments.forEach((appointment) => {
                const row = table.insertRow();
                const { bookingNumber, name, date, status } = appointment;
                const data = [bookingNumber, name, date, status];

                data.forEach((value) => {
                    const cell = row.insertCell();
                    cell.textContent = value;
                });
            });

            return table;
        }