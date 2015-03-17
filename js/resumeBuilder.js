var bio =
{
    "name": "Daniel Rosca",
    "role": "Front End Nanomaterial Specialist",
    "contacts": {
        "mobile": "514-497-5555",
        "email": "roscaiosif@gmail.com",
        "github": "roscaiosif",
        "location": "Montreal"
    },
    "welcomeMessage": "There’s Plenty of Room at the Bottom (Richard Feynman)",
    "skills": [
        "carbon nanomaterials",
        "composite manufacturing and charcterization",
        "CATIA V5-6","FiberSim",
        "HTML", "CSS", "JavaScript",
        "PHP", "MySQL",
        "Photoshop","PremierePro"
    ],
    "biopic": "images/biopic.jpg",
    "displayContacts": function(){
        var str = "";
        str += HTMLmobile.replace("%data%",this.contacts.mobile);
        str += HTMLemail.replace("%data%",this.contacts.email);
        str += HTMLgithub.replace("%data%",this.contacts.github);
        str += HTMLlocation.replace("%data%",this.contacts.location);
        $("#topContacts").append(str);
        $("#footerContacts").append(str);
    },
    "displaySkills" : function () {
        if (this.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            var str ="", n = this.skills.length;
            for (var i = 0; i < n; i++) {
                str += HTMLskills.replace("%data%", bio.skills[i]);
            }
            $("#skills").append(str);
        };
    }
};

var education =
{
    "schools": [
        {
            "name": "Hokkaido Daigaku",
            "location": "Sapporo",
            "degree": "Postdoctoral Fellow",
            "majors": [
                "biodegradable nano-particles",
                "carbon nanotubes"
            ],
            "dates": "2002-2004",
            "url": "http://www.hokudai.ac.jp/"
        },
        {
            "name": "Université Jean Monnet",
            "location": "Saint-Etienne",
            "degree": "PhD",
            "majors": [
                "heat and mass transfer in polymers",
                "modelling and simulation"
            ],
            "dates": "1993-1998",
            "url": "http://portail.univ-st-etienne.fr/"
        },
        {
            "name": "Politehnica University Bucharest",
            "location": "Bucharest",
            "degree": "Engineer",
            "majors": [
                "polymer synthesis",
                "polymer processing"
            ],
            "dates": "1983-1988",
            "url": "http://www.upb.ro"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
        },
        {
            "title": "How to use Git and GitHub",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
        }
    ],
    "display" : function(){
        var str,maj, n,tmp;
        for(school in this.schools){
            $("#education").append(HTMLschoolStart);
            str = "";
            tmp = HTMLschoolName.replace("%data%",this.schools[school].name);
            tmp = tmp.replace("#",this.schools[school].url);
            str += tmp;
            str += HTMLschoolDegree.replace("%data%",this.schools[school].degree);
            str += HTMLschoolDates.replace("%data%",this.schools[school].dates);
            str += HTMLschoolLocation.replace("%data%",this.schools[school].location);
            maj = "";
            n = this.schools[school].majors.length;
            for(var i = 0; i < n; i++){
                maj += this.schools[school].majors[i] + "; ";
            }
            str += HTMLschoolMajor.replace("%data%",maj);
            $(".education-entry:last").append(str);
        }
        $("#education").append(HTMLonlineClasses);
        for(onlineCourse in this.onlineCourses){
            $("#education").append(HTMLschoolStart);
            str = "";
            tmp = HTMLonlineTitle.replace("#", this.onlineCourses[onlineCourse].url);
            tmp = tmp.replace("%data%", this.onlineCourses[onlineCourse].title);
            str += tmp;
            str += HTMLonlineSchool.replace("%data%",this.onlineCourses[onlineCourse].school);
            str += HTMLonlineDates.replace("%data%",this.onlineCourses[onlineCourse].date);
            /*str += HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);*/
            $(".education-entry:last").append(str);
        }
    }
};

 var work =
{
    "jobs": [
        {
            "employer": "Concordia University",
            "title": "Lab Manager",
            "location": "Montreal",
            "dates": "2007 - present",
            "description": "Research associate working on new multifunctional composites based on carbon nanomaterials. Laboratory safety manager at the Composite Manufacturing Laboratory."
        },
        {
            "employer": "Politehnica University Bucharest",
            "title": "Associate Professor",
            "location": "Bucharest",
            "dates": "1991 - 2006",
            "description": "Conducted research on polymer synthesis and characterization"
        }
    ],
    "display" : function(){
        for (job in work.jobs){
            var str ="";
            str += HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            str += HTMLworkTitle.replace("%data%", work.jobs[job].title);
            str += HTMLworkDates.replace("%data%", work.jobs[job].dates);
            str += HTMLworkLocation.replace("%data%", work.jobs[job].location);
            str += HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(str);
        }
    }
};

 var projects =
{
    "projects": [
        {
            "title": "Nanocrystalline Cellulose",
            "dates": "2012-present",
            "description": "Developed a new method for transferring NCC effectively from aqueous suspension into any hydrophobic organic liquids like: paints, primers, adhesives, sealants, etc.",
            "images": [
                "images/proj_1_1.jpg",
                "images/proj_1_2.jpg"
            ]
        },
        {
            "title": "Conductive composites based on CNTs",
            "dates": "2007-present",
            "description": "Obtained epoxy-carbon nanotube composites with conductivities several orders of magnitude higher than those reported in the literature and with high EMI shielding effectiveness at low nanotube loading. The results were published in Carbon and IIEE Transactions on Electromagnetic Compatibility.",
            "images": [
                "images/proj_2_1.jpg",
                "images/proj_2_2.jpg"
            ]
        },
        {
            "title": "Understanding the behavior of CFRP composites in extreme space environment",
            "dates": "2010-2013",
            "description": "Identified the main influence parameters that determine the behaviour of bonded joints exposed to extreme thermal cycling",
            "images": [
            ]
        },
        {
            "title": "Carbon nanotube antennas for wireless communications and RFID tags",
            "dates": "2010-2014",
            "description": "Developed all composite antennas based on SWCNT buckyapers. The results were published in: IEEE Antennas and Wireless Propagation Letters, ACES Journal and IEEE Transactions on Antenna and Propagation.",
            "images": [
            ]
        },

        ],
    "carouselSlides":[
        {
            "img": "images/slide_1.jpg",
            "imgAlt":"Pictures of CNC in different resins",
            "caption":"<h3>ArboraNano</h3><p>Crystallyne nanocellulose dispersion in hydrophobic media</p>"
        },
        {
            "img": "images/slide_2.jpg",
            "imgAlt":"Pictures of composite structures exposed to thermal cycling",
            "caption":"<h3>CRIAQ</h3><p>Composite structure behaviour in extreme space environments</p>"
        },
        {
            "img": "images/slide_3.jpg",
            "imgAlt":"Pictures of nanotube composite manufacturing and electrical conductivity",
            "caption":"<h3>CRIAQ</h3><p>Highly conductive composites based on carbon nanotubes</p>"
        }
    ],
    "display" : function(){
        for (project in this.projects){
            $("#projects").append(HTMLprojectStart);
            var  str ="";
            str += HTMLprojectTitle.replace("%data%", this.projects[project].title);
            str += HTMLprojectDates.replace("%data%", this.projects[project].dates);
            str += HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $(".project-entry:last").append(str);
            str ="";
            for (image in projects.projects[project].images){
                str += HTMLprojectImage.replace("%data%",this.projects[project].images[image])
            }
            $(".project-entry:last").append(str);
        }
    },
    "diplayCarousel" : function(){
        var str="", tmp = "", n = this.carouselSlides.length;
        str += HTLMprojectCarouselIndicator.replace('%data%','"0" class="active"');
        for (var i = 1; i < n; i++){
            str += HTLMprojectCarouselIndicator.replace('%data%', '"' + i +'"');
        }
        $(".carousel-indicators").append(str);
        tmp = HTLMprojectCarouselItem.replace("%active%", "active");
        tmp = tmp.replace("%image%", this.carouselSlides[0].img);
        tmp = tmp.replace("%alt%", this.carouselSlides[0].imgAlt);
        str = tmp.replace("%caption%", this.carouselSlides[0].caption);
        for (var i = 1; i < n; i++){
            tmp = HTLMprojectCarouselItem.replace("%active%", "");
            tmp = tmp.replace("%image%", this.carouselSlides[i].img);
            tmp = tmp.replace("%alt%", this.carouselSlides[i].imgAlt);
            str += tmp.replace("%caption%", this.carouselSlides[i].caption);
        }
        $(".carousel-inner").append(str);
    }
};

//ZERO
//*$("#main").append(internationalizeButton);

//HEADER
var str ="";
str = HTMLheaderName.replace("%data%",bio.name);
str += " " + HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(str);
//top and footer Contacts
bio.displayContacts();
//biopic and welcome message
str ="";
str += HTMLbioPic.replace("%data%",bio.biopic);
str += HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(str);
//skills
bio.displaySkills();

//PROJECTS
projects.diplayCarousel();
projects.display();

//WORK Exeperience
work.display();

//EDUCATION
education.display();

//Name internationalization function
var inName =function(name){
    var nameAr = [];
    nameAr = bio.name.split(" ");
    nameAr[1] = nameAr[1].toUpperCase();
    var intlName = nameAr.join(" ");
    return intlName;
}
$("#mapDiv").append(googleMap);