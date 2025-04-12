let jobs = [
    {
        title: "Software Developer",
        company: "Tech Co",
        location: { lon: 12.5683, lat: 55.6761 },
        description: "Full-stack developer position"
    },
    {
        title: "Marketing Specialist",
        company: "Marketing Co",
        location: { lon: 12.575, lat: 55.67 },
        description: "Digital marketing expert needed"
    }
];

// Funzione per caricare i lavori
function loadJobs() {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.innerHTML = `
            <h5>${job.title}</h5>
            <p>${job.company}</p>
            <p>${job.description}</p>
        `;
        jobList.appendChild(jobCard);

        // Aggiungi il marcatore sulla mappa
        addMarker(job.location.lon, job.location.lat, job);
    });
}

window.onload = loadJobs;
