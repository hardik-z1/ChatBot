const faqs = {
    "library card": {
        answer: "Yes, students must carry their library card while entering the library. It serves as your identification for accessing library facilities and borrowing books."
    },
    "e-books|digital resources|online journals": {
        answer: "Yes, our college library provides access to a wide range of digital resources! <span class='emoji'>✅</span> E-books on various subjects <br><span class='emoji'>📑</span> Online journals and research papers"
    },
    "renew|renewal|renew book": {
        answer: "You can renew a borrowed book online through the Library Management System.<br><br>Here's how to do it:<br><br>1. Log in to your Library Account on the portal.<br>2. Go to 'My Borrowed Books'.<br>3. Click on the 'Renew' option next to the book you'd like to extend."
    },
    "fine|late|penalty|late return": {
        answer: "If you return a book after the due date, a fine will be charged as per the library policy.<br><br><span class='emoji'>📅</span> Fine amount: ₹2 per day per book<br><br><span class='emoji'>⏰</span> Fines will continue to accumulate until the book is returned."
    },
    "how many books|borrow limit": {
        answer: "<span class='emoji'>📚</span> As a student, you can borrow up to 6 books at a time using your library card.<br>This limit helps ensure fair access to books for all students."
    },
    "duration|issue period|how long can I keep": {
        answer: "<span class='emoji'>⏳</span> The standard issue period for each book is 6 months. You will be informed about the exact due date for each book in your mail account. If needed, you can request a renewal before the due date by visiting the library."
    },
    "timing|opening hours|closing hours|when is the library open": {
        answer: "<span class='emoji'>🕒</span> Library Timings:<br><br>Monday to Friday: 9:00 AM -- 10:00 PM<br>Saturday: 2:00 PM -- 10:00 PM<br>Sunday: Closed<br><br><span class='emoji'>📌</span> Please note: Hours may vary during exams or special events. Always check the latest updates on your mail account."
    },
    "holiday|semester break|vacation": {
        answer: "<span class='emoji'>📅</span> The library remains closed on public holidays and may have reduced or adjusted hours during semester breaks which will be informed on your mail."
    },
    "lose|lost book|missing book": {
        answer: "If you lose a book, report it immediately to the library staff.<br><br><span class='emoji'>📌</span> You may be required to:<br>- Replace the lost book with a new copy.<br>- Or pay the cost of the book along with a fine."
    },
    "group study|discussion area|study room": {
        answer: "Yes, the library offers group study areas for collaborative work.<br><br><span class='emoji'>🧑‍🤝‍🧑</span> Group rooms can be reserved in advance via the online booking system or by contacting the help desk."
    },
    "alumni|former student": {
        answer: "<span class='emoji'>🎓</span> Yes, alumni can access limited library services after obtaining an alumni library membership card.<br><br>Note: Access to digital resources may be restricted due to licensing agreements."
    },
    "wifi|wi-fi|internet": {
        answer: "Yes, the library is equipped with high-speed Wi-Fi.<br><br><span class='emoji'>📶</span> Students must log in with their institutional credentials to access the internet."
    },
    "donate|book donation": {
        answer: "<span class='emoji'>📚</span> Yes! The library accepts book donations in good condition.<br><br>Donated books will be reviewed by the librarian and added to the collection if relevant."
    },
    "suggest book|recommend book|new book": {
        answer: "You can suggest new books through the \"Suggest a Book\" feature on the library portal.<br><br><span class='emoji'>📝</span> Provide:<br>- Book title<br>- Author<br>- ISBN (if known)<br>- Reason for recommendation"
    },
    "technical issue|problem with portal|library portal": {
        answer: "<span class='emoji'>🛠</span> For technical support, reach out to the library's IT helpdesk via:<br><br><span class='emoji'>📧</span> Email: librarysupport@manit.edu<br><span class='emoji'>📞</span> Phone: +91-XXXXXXXXXX"
    },
    "default": {
        answer: "I'm sorry, I couldn't understand your question. Here are some common questions I can answer:<br><br>" +
        "- Do I need my library card to enter?<br>" +
        "- How do I renew a book?<br>" +
        "- What are the library timings?<br>" +
        "- Can I access e-books?<br>" +
        "- What if I lose a book?<br>" +
        "- Are there group study rooms?<br><br>" +
        "Try asking one of these or rephrase your question."
    }
};

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addMessage(message, 'user');
    userInput.value = '';
    
    // Show typing indicator
    const chatContainer = document.getElementById('chat-container');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.id = 'typing-indicator';
    typingIndicator.innerHTML = 
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    ;
    chatContainer.appendChild(typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Simulate typing delay
    setTimeout(() => {
        document.getElementById('typing-indicator').remove();
        const response = getResponse(message);
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
}

function sendQuickQuestion(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function addMessage(message, sender) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.className = message ${sender}-message;
    messageElement.innerHTML = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [keywords, data] of Object.entries(faqs)) {
        if (keywords === 'default') continue;
        
        const keywordArray = keywords.split('|');
        for (const keyword of keywordArray) {
            if (lowerMessage.includes(keyword)) {
                return data.answer;
            }
        }
    }
    
    return faqs.default.answer;
}
