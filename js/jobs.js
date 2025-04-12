let jobs = [];

function loadJobs() {
    jobs = [
        {
            title: "Software Developer",
            company: "Tech Co",
            address: "Nørrebrogade 1, Copenhagen",
            description: "Full-stack developer position",
            location: { lat: 55.6861, lng: 12.5683 }
        }
    ];
    displayJobs();
}

function displayJobs() {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.innerHTML = `
            <h5>${job.title}</h5>
            <p>${job.company}</p>
            <p>${job.address}</p>
        `;
        jobList.appendChild(jobCard);
        addMarker(job.location, job);
    });
}

window.onload = () => {
    initMap();
    loadJobs();
};
