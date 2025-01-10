document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show a success message (replace with your own logic)
        alert('Thank you for your message! We\'ll get back to you soon.');
        form.reset();
    });

    // Animate skills on scroll
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.skill');

    const animateSkills = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < triggerBottom) {
                skill.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Animate projects on scroll
    const projectsSection = document.getElementById('projects');
    const projects = document.querySelectorAll('.project');

    const animateProjects = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        projects.forEach((project, index) => {
            const projectTop = project.getBoundingClientRect().top;
            if (projectTop < triggerBottom) {
                project.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
            }
        });
    };

    window.addEventListener('scroll', animateProjects);
});