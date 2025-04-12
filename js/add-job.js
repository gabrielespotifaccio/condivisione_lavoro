document.getElementById("jobForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const jobData = {
        title: document.getElementById("jobTitle").value,
        company: document.getElementById("company").value,
        address: document.getElementById("address").value,
        description: document.getElementById("description").value
    };
    window.location.href = "index.html";
});
