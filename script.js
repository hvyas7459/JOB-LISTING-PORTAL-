const jobListings = [
    { id: 1, title: 'Software Developer', description: 'Develop web applications.' },
    { id: 2, title: 'Data Analyst', description: 'Analyze and interpret data.' },
    { id: 3, title: 'Product Manager', description: 'Manage product life cycle.' },
    { id: 4, title: 'UI/UX Designer', description: 'Design user interfaces and experiences.' },
];

function displayJobs(jobs) {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';
    jobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong>: ${job.description}`;
        jobList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayJobs(jobListings);

    document.getElementById('search').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredJobs = jobListings.filter(job => 
            job.title.toLowerCase().includes(query)
        );
        displayJobs(filteredJobs);
    });
});
