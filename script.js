// Problem statements data
const problems = [
    // ECE (5 problems)
    {
        category: 'electronics',
        title: 'Smart Traffic Management System',
        description: 'IoT-based real-time traffic control using sensors and ML',
        details: {
            difficulty: 'Advanced',
            resources: ['Raspberry Pi', 'TensorFlow Lite', 'AWS IoT'],
            requirements: 'Real-time processing, <1s response time',
            description: 'Develop an adaptive traffic system using computer vision and IoT sensors to optimize traffic flow in smart cities.'
        }
    },
    {
        category: 'electronics',
        title: 'Autonomous Drone Surveillance',
        description: 'AI-powered drone for real-time surveillance and monitoring',
        details: {
            difficulty: 'Advanced',
            resources: ['Raspberry Pi', 'OpenCV', 'LiDAR'],
            requirements: 'Autonomous navigation, real-time image processing',
            description: 'Build a self-navigating drone with AI-based object detection for security and monitoring.'
        }
    },
    {
        category: 'electronics',
        title: 'Smart Water Quality Monitoring System',
        description: 'IoT sensors for detecting water contamination',
        details: {
            difficulty: 'Intermediate',
            resources: ['Arduino', 'pH Sensor', 'Turbidity Sensor'],
            requirements: 'Continuous monitoring, cloud storage',
            description: 'Develop a system that analyzes water quality parameters using IoT and alerts users if contamination is detected.'
        }
    },
    {
        category: 'electronics',
        title: 'Energy-Efficient Smart Grid',
        description: 'AI-powered electricity distribution system',
        details: {
            difficulty: 'Advanced',
            resources: ['Machine Learning', 'Smart Meters', 'IoT'],
            requirements: 'Real-time energy distribution, predictive analytics',
            description: 'Optimize power usage in smart cities using AI and real-time monitoring.'
        }
    },
    {
        category: 'electronics',
        title: 'Biomedical Signal Processing',
        description: 'AI-driven ECG signal analysis for early heart disease detection',
        details: {
            difficulty: 'Advanced',
            resources: ['TensorFlow', 'ECG Sensors', 'Cloud Computing'],
            requirements: 'High accuracy, real-time processing',
            description: 'Develop an AI model to analyze ECG signals and predict cardiovascular diseases.'
        }
    },

    // AIML (15 problems)
    {
        category: 'AIML',
        title: 'AI-Powered Resume Screening System',
        description: 'NLP-based automated filtering of job applications',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'NLTK', 'Scikit-learn'],
            requirements: 'Resume parsing, keyword extraction',
            description: 'Develop a resume screening system that automatically shortlists candidates based on job descriptions.'
        }
    },
    {
        category: 'AIML',
        title: 'Fake News Detection',
        description: 'ML model to classify fake vs. real news',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'TensorFlow', 'Scrapy'],
            requirements: 'High accuracy, real-time processing',
            description: 'Train a model to analyze text patterns and detect misinformation in online articles.'
        }
    },
    {
        category: 'AIML',
        title: 'Chatbot for Mental Health Assistance',
        description: 'Sentiment analysis-based chatbot for mental health support',
        details: {
            difficulty: 'Intermediate',
            resources: ['Dialogflow', 'Python', 'TensorFlow'],
            requirements: 'Emotion detection, NLP integration',
            description: 'Create a chatbot that offers mental health support using sentiment analysis and NLP.'
        }
    },
    {
        category: 'AIML',
        title: 'Autonomous Self-Driving Car Simulation',
        description: 'Reinforcement learning for autonomous vehicle path planning',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'OpenAI Gym', 'CARLA Simulator'],
            requirements: 'AI-driven navigation, real-time decision making',
            description: 'Simulate a self-driving car that learns to navigate through reinforcement learning.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Based Music Composer',
        description: 'AI-generated music using deep learning',
        details: {
            difficulty: 'Advanced',
            resources: ['Magenta', 'TensorFlow', 'MIDI'],
            requirements: 'Deep learning model for music composition',
            description: 'Develop an AI model that can generate original music compositions based on user input.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Powered Image Recognition System',
        description: 'Deep learning model for object detection in images',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'TensorFlow', 'OpenCV'],
            requirements: 'High accuracy, real-time processing',
            description: 'Develop an AI system that can detect and classify objects in images with high precision.'
        }
    },
    {
        category: 'AIML',
        title: 'Predictive Maintenance for Industrial Equipment',
        description: 'ML model to predict equipment failures',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'Scikit-learn', 'Pandas'],
            requirements: 'Predictive analytics, real-time monitoring',
            description: 'Build a system that predicts equipment failures using sensor data and machine learning.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Powered Language Translation',
        description: 'Neural network-based language translation system',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'TensorFlow', 'Transformer Models'],
            requirements: 'High accuracy, multi-language support',
            description: 'Develop an AI system that translates text between multiple languages in real-time.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Driven Stock Market Prediction',
        description: 'Predict stock prices using machine learning',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'Scikit-learn', 'Yahoo Finance API'],
            requirements: 'High accuracy, real-time predictions',
            description: 'Create a model that predicts stock market trends using historical data and machine learning.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Powered Virtual Assistant',
        description: 'Voice-controlled virtual assistant using NLP',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'Google Speech API', 'NLTK'],
            requirements: 'Voice recognition, NLP integration',
            description: 'Develop a virtual assistant that can understand and respond to voice commands using AI.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Based Fraud Detection in Banking',
        description: 'ML model to detect fraudulent transactions',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'Scikit-learn', 'Pandas'],
            requirements: 'Real-time detection, high accuracy',
            description: 'Build a system that detects and prevents fraudulent transactions in banking using AI.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Powered Recommendation System',
        description: 'Personalized recommendations using collaborative filtering',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'Scikit-learn', 'Pandas'],
            requirements: 'High accuracy, real-time recommendations',
            description: 'Develop a recommendation system that suggests products or content based on user behavior.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Based Sentiment Analysis',
        description: 'Analyze customer feedback using NLP',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'NLTK', 'Scikit-learn'],
            requirements: 'Sentiment classification, real-time analysis',
            description: 'Create a system that analyzes customer reviews and classifies them as positive, negative, or neutral.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Powered Medical Diagnosis System',
        description: 'ML model for disease diagnosis using medical data',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'TensorFlow', 'Scikit-learn'],
            requirements: 'High accuracy, real-time diagnosis',
            description: 'Develop an AI system that can diagnose diseases based on patient data and medical history.'
        }
    },
    {
        category: 'AIML',
        title: 'AI-Based Traffic Sign Recognition',
        description: 'Deep learning model for recognizing traffic signs',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'TensorFlow', 'OpenCV'],
            requirements: 'High accuracy, real-time recognition',
            description: 'Build a system that can detect and classify traffic signs in real-time using AI.'
        }
    },
    // (Add 10 more AIML problems here)

    // Cyber Security (15 problems)
    {
        category: 'CyberSecurity',
        title: 'Intrusion Detection System (IDS) using ML',
        description: 'AI model for detecting network intrusions',
        details: {
            difficulty: 'Advanced',
            resources: ['Wireshark', 'Python', 'Keras'],
            requirements: 'Real-time anomaly detection',
            description: 'Develop an ML-based IDS to monitor network traffic and detect malicious activities.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Phishing URL Detection',
        description: 'ML-based detection of phishing websites',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'BeautifulSoup', 'TensorFlow'],
            requirements: 'URL classification, blacklist integration',
            description: 'Train a model to classify URLs as legitimate or phishing to enhance web security.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Ransomware Detection System',
        description: 'Early detection of ransomware attacks using AI',
        details: {
            difficulty: 'Advanced',
            resources: ['Deep Learning', 'Behavior Analysis', 'Firewalls'],
            requirements: 'Early detection, high accuracy',
            description: 'Develop an AI-powered system that detects ransomware activity before it encrypts data.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Zero-Day Exploit Detection',
        description: 'AI-based detection of unknown vulnerabilities',
        details: {
            difficulty: 'Advanced',
            resources: ['Machine Learning', 'Behavioral Analysis', 'Sandboxing'],
            requirements: 'Real-time detection, low false positives',
            description: 'Create a system that identifies and mitigates zero-day exploits using AI and behavioral analysis.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Secure Multi-Factor Authentication',
        description: 'AI-enhanced MFA system for secure logins',
        details: {
            difficulty: 'Intermediate',
            resources: ['Python', 'OAuth', 'Biometric Sensors'],
            requirements: 'High security, user-friendly interface',
            description: 'Develop a multi-factor authentication system that uses AI to detect and prevent unauthorized access.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Blockchain-Based Data Integrity',
        description: 'Ensure data integrity using blockchain technology',
        details: {
            difficulty: 'Advanced',
            resources: ['Ethereum', 'Solidity', 'IPFS'],
            requirements: 'Immutable data storage, tamper-proof logs',
            description: 'Build a system that uses blockchain to ensure data integrity and prevent unauthorized modifications.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'AI-Powered Threat Intelligence Platform',
        description: 'Real-time threat detection and response',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'Elasticsearch', 'Kibana'],
            requirements: 'Real-time alerts, automated response',
            description: 'Develop a platform that uses AI to analyze threat data and provide actionable insights.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Secure IoT Device Management',
        description: 'AI-based security for IoT devices',
        details: {
            difficulty: 'Intermediate',
            resources: ['Raspberry Pi', 'MQTT', 'TensorFlow'],
            requirements: 'Device authentication, secure communication',
            description: 'Create a system that ensures secure communication and management of IoT devices.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'AI-Driven Malware Analysis',
        description: 'Automated malware detection and classification',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'TensorFlow', 'Cuckoo Sandbox'],
            requirements: 'High accuracy, real-time analysis',
            description: 'Develop an AI system that analyzes and classifies malware samples automatically.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Secure Cloud Data Storage',
        description: 'Encrypted cloud storage with AI-based access control',
        details: {
            difficulty: 'Intermediate',
            resources: ['AWS', 'Python', 'Encryption Algorithms'],
            requirements: 'End-to-end encryption, access control',
            description: 'Build a secure cloud storage system with AI-based access control and encryption.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'AI-Powered Fraud Detection',
        description: 'Detect fraudulent transactions using AI',
        details: {
            difficulty: 'Advanced',
            resources: ['Python', 'Scikit-learn', 'Pandas'],
            requirements: 'Real-time detection, high accuracy',
            description: 'Develop an AI system that detects and prevents fraudulent financial transactions.'
        }
    },
    {
        category: 'CyberSecurity',
        title: 'Secure API Gateway',
        description: 'AI-based protection for APIs',
        details: {
            difficulty: 'Intermediate',
            resources: ['Node.js', 'OAuth', 'TensorFlow'],
            requirements: 'API security, rate limiting',
            description: 'Create a secure API gateway that uses AI to detect and prevent malicious requests.'
        }
    },

    // Web3 (15 problems)
    {
        category: 'Web3',
        title: 'Decentralized Identity Verification System',
        description: 'Blockchain-based identity authentication system',
        details: {
            difficulty: 'Advanced',
            resources: ['Ethereum', 'Solidity', 'Metamask'],
            requirements: 'Secure, tamper-proof identity verification',
            description: 'Build a decentralized identity system that ensures secure and verifiable credentials on blockchain.'
        }
    },
    {
        category: 'Web3',
        title: 'NFT Marketplace with Smart Contracts',
        description: 'Develop an NFT trading platform on Ethereum',
        details: {
            difficulty: 'Advanced',
            resources: ['Solidity', 'Web3.js', 'IPFS'],
            requirements: 'Secure smart contracts, gas optimization',
            description: 'Create a marketplace where users can buy, sell, and trade NFTs securely.'
        }
    },
    {
        category: 'Web3',
        title: 'Decentralized Voting System',
        description: 'Tamper-proof blockchain-based voting system',
        details: {
            difficulty: 'Advanced',
            resources: ['Hyperledger Fabric', 'Solidity', 'Metamask'],
            requirements: 'End-to-end encryption, voter privacy',
            description: 'Develop a secure and transparent blockchain-based voting system for elections.'
        }
    },
    {
        category: 'Web3',
        title: 'Decentralized Finance (DeFi) Lending Platform',
        description: 'Blockchain-based lending and borrowing system',
        details: {
            difficulty: 'Advanced',
            resources: ['Ethereum', 'Solidity', 'Web3.js'],
            requirements: 'Secure smart contracts, interest rate algorithms',
            description: 'Build a DeFi platform that allows users to lend and borrow crypto assets securely.'
        }
    },
    {
        category: 'Web3',
        title: 'Blockchain-Based Supply Chain Tracking',
        description: 'Transparent supply chain management using blockchain',
        details: {
            difficulty: 'Intermediate',
            resources: ['Hyperledger', 'Solidity', 'IPFS'],
            requirements: 'Real-time tracking, immutable records',
            description: 'Develop a system that tracks products through the supply chain using blockchain technology.'
        }
    },
    {
        category: 'Web3',
        title: 'Decentralized Social Media Platform',
        description: 'Blockchain-based social network with user-owned data',
        details: {
            difficulty: 'Advanced',
            resources: ['Ethereum', 'Solidity', 'IPFS'],
            requirements: 'User privacy, data ownership',
            description: 'Create a social media platform where users own and control their data using blockchain.'
        }
    },
    {
        category: 'Web3',
        title: 'Tokenized Real Estate Platform',
        description: 'Blockchain-based real estate investment platform',
        details: {
            difficulty: 'Advanced',
            resources: ['Ethereum', 'Solidity', 'Web3.js'],
            requirements: 'Tokenization, fractional ownership',
            description: 'Build a platform that allows users to invest in real estate using blockchain tokens.'
        }
    },
    {
        category: 'Web3',
        title: 'Decentralized Cloud Storage',
        description: 'Blockchain-based secure cloud storage',
        details: {
            difficulty: 'Intermediate',
            resources: ['IPFS', 'Solidity', 'Ethereum'],
            requirements: 'Data encryption, decentralized storage',
            description: 'Develop a decentralized cloud storage system that ensures data security and privacy.'
        }
    },
    {
        category: 'Web3',
        title: 'Blockchain-Based Healthcare Records',
        description: 'Secure and transparent healthcare record management',
        details: {
            difficulty: 'Advanced',
            resources: ['Hyperledger', 'Solidity', 'IPFS'],
            requirements: 'Data privacy, secure access',
            description: 'Create a system that manages healthcare records securely using blockchain.'
        }
    },
    {
        category: 'Web3',
        title: 'Decentralized Autonomous Organization (DAO)',
        description: 'Blockchain-based organization with smart contracts',
        details: {
            difficulty: 'Advanced',
            resources: ['Ethereum', 'Solidity', 'Web3.js'],
            requirements: 'Governance, voting mechanisms',
            description: 'Develop a DAO that allows decentralized decision-making using blockchain.'
        }
    },
    {
        category: 'Web3',
        title: 'Blockchain-Based Digital Identity',
        description: 'Secure digital identity management using blockchain',
        details: {
            difficulty: 'Intermediate',
            resources: ['Ethereum', 'Solidity', 'Metamask'],
            requirements: 'User privacy, secure verification',
            description: 'Build a system that manages digital identities securely using blockchain.'
        }
    },
    {
        category: 'Web3',
        title: 'Decentralized Content Sharing Platform',
        description: 'Blockchain-based platform for content creators',
        details: {
            difficulty: 'Intermediate',
            resources: ['IPFS', 'Solidity', 'Ethereum'],
            requirements: 'Content ownership, monetization',
            description: 'Create a platform where content creators can share and monetize their work using blockchain.'
        }
    }
];

// DOM Elements
const problemGrid = document.getElementById('problemGrid');
const countdownEl = document.getElementById('countdown');
const modal = document.getElementById('problemModal');
const modalContent = document.getElementById('modalContent');

// Hackathon start and end times
const startTime = new Date('2025-02-07T10:30:00').getTime(); 
const endTime = new Date('2025-02-08T17:30:00').getTime(); 

function renderProblems(category = 'all') {
    problemGrid.innerHTML = '';

    if (category === 'all') {
       
        const allProblemsSection = document.createElement('div');
        allProblemsSection.className = 'category-section';
        allProblemsSection.innerHTML = `
            <h2 class="category-title"></h2>
            <div class="category-problems"></div>
        `;

        const allProblemsContainer = allProblemsSection.querySelector('.category-problems');
        problems.forEach((problem, index) => {
            const card = document.createElement('div');
            card.className = 'problem-card';
            card.innerHTML = `
                <div class="problem-category">${problem.category.toUpperCase().trim()}</div>
                <h3>${problem.title}</h3>
                <p>${problem.description}</p>
            `;
            card.addEventListener('click', () => showProblem(index));
            allProblemsContainer.appendChild(card);
        });

        problemGrid.appendChild(allProblemsSection);
    } else {
        const categories = {};
        problems.forEach(problem => {
            if (!categories[problem.category]) {
                categories[problem.category] = [];
            }
            categories[problem.category].push(problem);
        });

        for (const [categoryName, categoryProblems] of Object.entries(categories)) {
            if (category !== categoryName.toLowerCase().trim()) continue;

            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            categorySection.innerHTML = `
                <h2 class="category-title">${categoryName.toUpperCase().trim()}</h2>
                <div class="category-problems"></div>
            `;

            const categoryProblemsContainer = categorySection.querySelector('.category-problems');
            categoryProblems.forEach((problem, index) => {
                const card = document.createElement('div');
                card.className = 'problem-card';
                card.innerHTML = `
                    <div class="problem-category">${problem.category.toUpperCase().trim()}</div>
                    <h3>${problem.title}</h3>
                    <p>${problem.description}</p>
                `;
                card.addEventListener('click', () => showProblem(index));
                categoryProblemsContainer.appendChild(card);
            });

            problemGrid.appendChild(categorySection);
        }
    }
}

function showProblem(index) {
    const problem = problems[index];
    modalContent.innerHTML = `
        <div class="problem-category">${problem.category.toUpperCase().trim()}</div>
        <h2>${problem.title}</h2>
        
        <div class="detail-item">
            <h3>📌 Description</h3>
            <p>${problem.details.description || problem.description}</p>
        </div>

        <div class="detail-item">
            <h3>⚙️ Requirements</h3>
            <p>${problem.details.requirements}</p>
        </div>

        <div class="detail-item">
            <h3>📦 Provided Resources</h3>
            <ul>${problem.details.resources.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>

        <div class="detail-item">
            <h3>📈 Difficulty Level</h3>
            <p>${problem.details.difficulty}</p>
        </div>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active'));
        button.classList.add('active');
        renderProblems(button.dataset.category);
    });
});

function updateCountdown() {
    const now = new Date().getTime();
    let message = "";

    if (now < startTime) {
        const diff = startTime - now;
        message = `⏳ Hackathon starts in: ${formatTime(diff)}`;
        problemGrid.innerHTML = ''; 
    } else if (now >= startTime && now < endTime) {
        const diff = endTime - now;
        message = `🚀 Hackathon Live! Ends in: ${formatTime(diff)}`;
        renderProblems(); 
    } else {
        
        message = "🎉 Hackathon Ended!";
        problemGrid.innerHTML = ''; 
        clearInterval(timer);
    }

    countdownEl.innerHTML = message;
}

function formatTime(diff) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 0);

window.onclick = function(event) {
    if (event.target == modal) closeModal();
};