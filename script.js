// Generate random arithmetic question for Anti-spam field
function generateAntiSpamQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() < 0.5 ? '+' : '-';
    const question = `Anti-spam* : ${num1} ${operator} ${num2} = ?`;
    document.getElementById('antiSpam').placeholder = question;
}

// Call the function when the page loads
window.onload = generateAntiSpamQuestion;

// Send form data to specified email address
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this);
    const email = 'info@fybacast.com.ng'; // Recipient email address
    const subject = 'New Contact Form Submission'; // Email subject
    let body = ''; // Email body
    
    // Construct email body using form data
    for (const [key, value] of formData.entries()) {
        body += `${key}: ${value}\n`;
    }
    
    // Send email using mailto: protocol
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});

// Side bar config
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//FadeInFromBottom Elements config
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    const elements = document.querySelectorAll('.txt, .contact-info, .txt2, .testimony, .testimony-position, .two-images-BW-Services, .ITNetworkInfrastructureSecondPix, .GraphicDesignThirdPix, .CloudComputingFourthPix, .CyberSecurityFifthPix, .AI-ML-DL-images, .subHeading, .contactInfo');
    elements.forEach(element => {
        observer.observe(element);
    });
});
