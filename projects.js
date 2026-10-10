/* ==========================================================================
   PROJECTS DATA FILE — Naya Project Add Karna BAHUT AASAN
   ==========================================================================
   
   Roman Urdu: TUM SIRF ISI FILE KO KHOLNA HAI naya project add karne ke liye.
               HTML ya CSS chherne ki zaroorat NAHI hai.

   KAISE ADD KARNA HAI:
     Neeche PROJECTS naam ki list me, braces { } ke andar ek nayi entry
     copy-paste kar do aur apni details bhar do. Bas! Website khud update ho jayegi.

   EXAMPLE (sirf samajhne ke liye — isay hata dena):
     {
         title: "Mera Naya Project",
         badge: "Python",
         desc: "Ye project karta kya hai — 1-2 lines me.",
         learn: ["Seekha hua point 1", "Seekha hua point 2"],
         linkCode: "https://github.com/username/project",
         linkDemo: ""
     },
   ========================================================================== */


/* ==========================================================================
   PROJECTS — Neeche har { } ka block = ek project card
   Roman Urdu: 'title'    = project ka naam
               'badge'    = chhota tag (Python / Networking / etc.)
               'desc'     = project ka tafseel (2-3 lines)
               'learn'    = wo points jo aapne is project se seekhe
               'linkCode' = GitHub ka link (khaali chhor dein to button nahi dikhega)
               'linkDemo' = live demo ka link (khaali chhor dein to button nahi dikhega)
   ========================================================================== */

const PROJECTS = [

    /* ---------- Project 1 ---------- */
    {
        title: "Echo Server & Client",
        badge: "Python",
        desc: "A server jo connection ka intezaar karta hai, aur ek client jo us se baat karta hai. Dono Python processes aapas mein messages bhejte hain.",
        learn: [
            "Client–Server model",
            "TCP sockets",
            "Port binding"
        ],
        linkCode: "#",
        linkDemo: "#"
    },

    /* ---------- Project 2 ---------- */
    {
        title: "Localhost Port Checker",
        badge: "Python",
        desc: "Checks which ports are open on my own computer. Apne ghar ke darwazon ki tarah check karta hai ke kaun sa darwaza khula hai.",
        learn: [
            "Port scanning concept",
            "Socket connections",
            "Error handling"
        ],
        linkCode: "#",
        linkDemo: "#"
    },

    /* ---------- Project 3 ---------- */
    {
        title: "Network Info Gatherer",
        badge: "Python",
        desc: "Meri machine ki network details nikalta hai — IP address, hostname, aur active network interfaces. Ye sirf mera apna computer check karta hai.",
        learn: [
            "IP addressing",
            "OS/network libraries",
            "Safe recon on own device"
        ],
        linkCode: "#",
        linkDemo: "#"
    },

    /* ---------- Project 4 ---------- */
    {
        title: "TCP Chat Room",
        badge: "Networking",
        desc: "A multi-user chat room where several clients can connect to the same server aur sab messages ek doosre ko dikhte hain.",
        learn: [
            "Multi-client servers",
            "Broadcasting messages",
            "Threading basics"
        ],
        linkCode: "#",
        linkDemo: "#"
    },

    /* ---------- Project 5 ---------- */
    {
        title: "Loopback Traffic Analyser",
        badge: "Cybersecurity",
        desc: "Watches traffic between my own programs on localhost and explains what each packet means in simple words.",
        learn: [
            "Packet structure",
            "Reading network data",
            "Analytical thinking"
        ],
        linkCode: "#",
        linkDemo: "#"
    },

    /* ---------- Project 6 ---------- */
    {
        title: "This Portfolio Website",
        badge: "Web",
        desc: "This website — HTML, CSS aur JavaScript se bani. Animated hacker background ke sath, mobile aur laptop dono par theek chalta hai.",
        learn: [
            "HTML structure",
            "CSS layouts & responsive design",
            "Deploying on Vercel"
        ],
        linkCode: "#",
        linkDemo: "#"
    },

    /* ======================================================================
       >>>>>>>>>>>>>>  NAYA PROJECT YAHAN ADD KAREIN  <<<<<<<<<<<<<<<<<<
       
       Neeche ka poora block copy karein, braces { } ke andar apni details
       bhar dein, aur wo block PROJECTS list ke andar paste kar dein.
       Dhyan rahe: har entry ke aakhir me comma (,) lagana zaroori hai.

       {
           title: "Project ka naam yahan",
           badge: "Python",
           desc: "Ye project karta kya hai — 2-3 lines me likhein.",
           learn: [
               "Seekha hua pehla point",
               "Seekha hua doosra point"
           ],
           linkCode: "https://github.com/aapka-username/project",
           linkDemo: ""
       },
       ====================================================================== */

];