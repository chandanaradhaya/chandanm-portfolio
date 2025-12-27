var audio = new Audio('assets/sentmessage.mp3');

var contactString = "<div class='social'>\
  <!--\ <a target='_blank' href='tel:+917259956267'>\
    <div class='socialItem' id='call'>\
      <img class='socialItemI' src='images/phone.svg'/>\
      <label class='number'>+91 7259956267</label>\
    </div>\
  </a>\
  -->\
  <!--\
  <a target='_blank' href='https://wa.me/917259956267'>\
    <div class='socialItem'>\
      <img class='socialItemI' src='images/whatsapp.svg' alt=''>\
    </div>\
  </a>\
  -->\
  <a href='mailto:chanduchandan2019@gmail.com'>\
    <div class='socialItem'>\
      <img class='socialItemI' src='images/gmail.svg' alt=''>\
    </div>\
  </a>\
  <a target='_blank' href='https://github.com/ChandanM1412'>\
    <div class='socialItem'>\
      <img class='socialItemI' src='images/github.svg' alt=''>\
    </div>\
  </a>\
  <a target='_blank' href='https://instagram.com/chandan_aradhaya'>\
    <div class='socialItem'>\
      <img class='socialItemI' src='images/instagram.svg' alt=''>\
    </div>\
  </a>\
  <a href='https://www.linkedin.com/in/chandan-m-701674213' target='_blank' rel='noopener noreferrer'>\
    <div class='socialItem'>\
      <img class='socialItemI' src='images/linkedin.svg' alt=''>\
    </div>\
  </a>\
</div>";

var resumeString = "<img src='images/resume.png' class='resumeThumbnail'>\
<div class='downloadSpace'>\
  <div class='pdfname'>\
    <img src='images/pdf.png'>\
    <label>Chandan M_Resume.pdf</label>\
  </div>\
  <a href='https://drive.google.com/drive/folders/1GeBSw7hPBuBUux1j-mB4TWz1bbYCNEXn?usp=drive_link' download='Chandan M_Resume.pdf'>\
    <img class='download' src='images/downloadIcon.svg'>\
  </a>\
</div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.375216071767!2d77.53015907494871!3d13.264476887078436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1df4fae79f5d9%3A0xb3ae3f842379f98d!2sChikka%20Tumkur!5e0!3m2!1sen!2sin!4v1683698994338!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Chikkatumkur<br>Veerapura Post<br>Doddaballapur Taluk -561203<br> Bengaluru Rural Dist<br> KA, India</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

// Helper function to get time in 12-hour format with AM/PM
function get12HourTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 => 12
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
}

// Set last seen
function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + get12HourTime(date);
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = x.style.display === 'flex' ? 'none' : 'flex';
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = x.style.display === 'flex' ? 'none' : 'flex';
}

function isEnter(event) {
    if (event.keyCode == 13) sendMsg();
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value.trim();
    if (ti === "") return;

    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = get12HourTime(date);
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = ti;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);

    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;

    setTimeout(() => waitAndResponce(ti), 1000);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage(
                    "Hello there 👋🏻,<br><br>" +
                    "My name is <span class='bold'><a class='alink'>Chandan M</a></span>.<br><br>" +
                    "<span class='bold'>Programmer | Developer |<br>" +
                    "Tech Enthusiast | Poetry Writer 👨🏻‍💻📚</span><br><br>" +
                    "As an engineer, I am eager to learn new skills and explore trending domains in computer science, enhancing my knowledge and abilities.<br><br>" +
                    "This is a WhatsApp Portfolio Bot.<br>" +
                    "Send <span class='bold'><a class='alink'>'Hi'</a></span> to know more."
                );
            }, 500);
            break;

        case "hi":
            sendTextMessage(
                "<span class='sk'>Send a coloured keyword to learn more about me...<br><br>" +
                "e.g.<br>" +
                "📍 <span class='bold'>skills</span> - to know my skills<br>" +
                "📍 <span class='bold'>education</span> - to get my education details<br>" +
                "📍 <span class='bold'>projects</span> - to get details of my projects<br>" +
                "📍 <span class='bold'>awards</span> - to view my awards, certifications, and patents<br>" +
                "📍 <span class='bold'>contact</span> - to get ways to connect with me<br>" +
                "📍 <span class='bold'>about</span> - to know about this site<br>" +
                "📍 <span class='bold'>clear</span> - to clear the conversation" +
                "</span>"
            );
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "skills":
            sendTextMessage(
                "<span class='sk'>I can comfortably write code in the following languages:<br>" +
                "<span class='bold'>Java<br>PHP<br>Python<br>CSS<br>HTML<br>SQL<br>JavaScript<br>Neo4j Graph Database<br>ELK (Elasticsearch, Logstash, Kibana)</span><br><br>" +
                "I have worked with the following tools:<span class='bold'><br>" +
                "Android Studio<br>VS Code<br>IntelliJ IDEA<br>Neo4j Bloom / Browser<br>Findwise I3<br>Postman</span><br></span>"
            );
            break;

        case "education":
            sendTextMessage(
                "🌟 <span class='bold'>B.E. in Information Science & Engineering</span><br>" +
                "Sai Vidya Institute of Technology, Bengaluru<br>Pass-out Year: 2024<br>CGPA: 8.8<br><br>" +
                "🌟 <span class='bold'>12th / PUC (PCMB)</span><br>" +
                "Vidyanidhi PU College, Tumkur<br>Pass-out Year: 2020<br>Percentage: 88%<br><br>" +
                "🌟 <span class='bold'>10th / SSLC</span><br>" +
                "Nalanda High School, Doddaballapur<br>Pass-out Year: 2018<br>Percentage: 90.4%"
            );
            break;

        case "address":
            sendTextMessage(addressString);
            break;

        case "clear":
            clearChat();
            break;

        case "about":
            sendTextMessage(
                "🛠️💻 This WhatsApp-themed portfolio chatbot is built using HTML, CSS, and JavaScript.<br><br>" +
                "👨🏻‍💻 Designed and developed by " +
                "<a class='alink' target='_blank' href='https://instagram.com/chandan_aradhaya/'>" +
                "<span class='bold'>Chandan M</span></a>"
            );
            break;

        case "contact":
            sendTextMessage("You can contact me using the options below:<br>" + contactString);
            break;

        case "projects":
            sendTextMessage(
                "Want to check out my projects? Visit my GitHub profile:<br><br>" +
                "<div class='social'><a target='_blank' href='https://github.com/ChandanM1412'>" +
                "<div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div>" +
                "</a></div>"
            );
            break;

        case "awards":
            sendTextMessage(
                "Do you want to check my awards, certifications and patents? Visit them on my LinkedIn profile:<br><br>" +
                "<div class='social'><a target='_blank' href='https://www.linkedin.com/in/chandan-m-701674213'>" +
                "<div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div>" +
                "</a></div>"
            );
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch that 😢<br>Send 'Hi' to know more about me.");
            }, 500);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.innerText = get12HourTime(date);
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = get12HourTime(date);
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry...";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
