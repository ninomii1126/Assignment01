document.addEventListener('DOMContentLoaded', () => {
    const processForm = () => {
        const form = document.getElementById('empForm');
        const formData = new FormData(form);
        console.log(`ID: ${formData.get("id")}`)
        console.log(`Full name: ${formData.get("fullName")}`)
        console.log(`Extension: ${formData.get("extension")}`)
        console.log(`Email: ${formData.get("email")}`)
        console.log(`Department: ${formData.get("department")}`)
    };
    const form = document.getElementById('empForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        processForm();
    });
});
