/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Nathan Friedman",
    "role": "Web Developer",
    "contacts": {
        "mobile": "956-451-0530",
        "email": "codeforgreatness@gmail.com",
        "twitter": "@RealFriedman",
        "github": "codeforgreatness",
        "blog": "www.thecodegreatness.com",
        "location": "Austin, TX"
    },
    "welcomeMessage": "I am a US Army veteran with two years professional " +
        "experience as a full stack web developer. I attended the University " +
        "of Texas where, through Java, I first learned how to code. I later " +
        "learned C++ in school and then C# in my first job. I am a very fast " +
        "learner, dedicated worker, and team player. What I lack in years of " +
        "experience I make up for with a high aptitude and strong values I " +
        "developed in the military.",
    "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "C#",
    "C++",
    "Java",
    "git",
    "ASP.NET MVC"
  ],
    "bioPic": "images/biopic.jpg",
    "display": function () {
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        //$("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%",
            '<a href="http://github.com/' + this.contacts.github + '">' + this.contacts.github + '</a>'));
        //$("#topContacts").append(HTMLblog.replace("%data%", this.contacts.blog));
        $("#topContacts").append(HTMLlocation.replace("%data%",
            this.contacts.location));
        $("#bio").append(HTMLbioPic.replace("%data%", this.bioPic));
        $("#bio").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        $("#bioRight").append(HTMLskillsStart);
        for (skill in this.skills) {
            $("#skillsList").append(HTMLskills.replace("%data%", this.skills[skill]));
        }
    }
}

var education = {
    "schools": [
        {
            "name": "University of Texas",
            "location": "Austin, TX",
            "degree": "Bachelor of Science - Incomplete",
            "majors": ["Computer Science", "Mathematics"],
            "dates": "2009-2013",
            "url": "www.utexas.edu"
    },
        {
            "name": "University of Texas",
            "location": "Austin, TX",
            "degree": "Bachelor of Arts",
            "majors": ["Government (Political Science)", "Middle Eastern Studies"],
            "dates": "2006-2008",
            "url": "www.utexas.edu"
    },
        {
            "name": "Udacity",
            "location": "Online",
            "degree": "Nanodegree",
            "majors": ["Front-End Web Development"],
            "dates": "2016-Present",
            "url": "www.udacity.com"
    }
  ],
    "onlineCourses": [
        {
            "title": "Building Web Applications with Node.js and Express 4.0",
            "school": "Pluralsight",
            "date": "2016",
            "url": "app.pluralsight.com/courses/nodejs-express-web-applications"
    },
        {
            "title": "Introduction to Node.js",
            "school": "Pluralsight",
            "date": "2016",
            "url": "app.pluralsight.com/courses/node-inro"
    },
        {
            "title": "jQuery: Getting Started",
            "school": "Pluralsight",
            "date": "2016",
            "url": "app.pluralsight.com/courses/jquery-getting-started"
    },
        {
            "title": "Quick Start to JavaScript: Volume 3",
            "school": "Pluralsight",
            "date": "2016",
            "url": "app.pluralsight.com/courses/quick-start-javascript-3-1918"
    },
        {
            "title": "Quick Start to JavaScript: Volume 2",
            "school": "Pluralsight",
            "date": "2016",
            "url": "app.pluralsight.com/courses/quick-start-javascript-2-1917"
    },
        {
            "title": "Quick Start to JavaScript: Volume 1",
            "school": "Pluralsight",
            "date": "2016",
            "url": "app.pluralsight.com/courses/quick-start-javascript-1-1870"
    }
  ],
    "display": function () {
        var index = 0;
        for (school in this.schools) {
            var id = "school" + index;
            var idSelector = "#school" + index;
            $("#education").append(HTMLschoolStart.replace("div",
                'div id="' + id + '"'));
            $(idSelector).append(HTMLschoolName.replace("%data%",
                this.schools[school].name) + HTMLschoolDegree.replace("%data%",
                this.schools[school].degree));
            $(idSelector).append(HTMLschoolDates.replace("%data%",
                this.schools[school].dates) + HTMLschoolLocation.replace("%data%",
                this.schools[school].location));
            $(idSelector).append(HTMLschoolMajor.replace("%data%",
                this.schools[school].majors));
            ++index;
        }
        index = 0;
        $("#education").append(HTMLonlineClasses);
        for (course in this.onlineCourses) {
            var id = "course" + index;
            var idSelector = "#course" + index;
            $("#education").append('<div id="' + id +
                '" class="education-entry row"></div>');
            $(idSelector).append(HTMLonlineTitle.replace('#">%data%',
                this.onlineCourses[course].url + '">' +
                this.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%",
                this.onlineCourses[course].school));
            $(idSelector).append(HTMLonlineDates.replace("%data%",
                this.onlineCourses[course].date));
            ++index;
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Accruent, LLC",
            "title": "Software Associate/Software Engineer in Test",
            "location": "Austin, TX",
            "dates": "2013-2015",
            "description": "Learned how to develop .NET web applications(HTML, CSS," +
                " JavaScript, C#, SQL Server) in two weeks.<br>Contributed to " +
                "development initiatve to create a single platform for multiple legacy " +
                "products.<br>Served as Scrum Master for the development team working " +
                "with product managers, QA engineers, and other developers.<br>" +
                "Volunteered to develop an in-house test automation framework from the " +
                "ground up.<br>Delivered a successful working test automation framework" +
                " as the lone developer on the project."
    },
        {
            "employer": "Internal Revenue Service",
            "title": "Correspondence Exam Technician",
            "location": "Austin, TX",
            "dates": "2008-2009",
            "description": "Managed a caseload of 150 Correspondence audits at one" +
                " time.<br>Received inbound customer calls to discuss tax law and details" +
                " specific to individual taxpayer audits."
    },
        {
            "employer": "United States Army",
            "title": "Combat Medic",
            "location": "San Antonio, TX",
            "dates": "2004-2006",
            "description": "Led teams of two to six medics in supporting training " +
                "missions.<br>Received an Honorable Discharge after an injury sustained" +
                " in a training exercise."
    }
  ],
    "display": function () {
        var index = 0;
        for (job in this.jobs) {
            var id = "job" + index;
            var idSelector = "#job" + index;
            $("#workExperience").append(HTMLworkStart.replace("div",
                'div id="' + id + '"'));
            $(idSelector).append(
                HTMLworkEmployer.replace("%data%", this.jobs[job].employer) +
                HTMLworkTitle.replace("%data%", this.jobs[job].title)
            );
            $(idSelector).append(HTMLworkDates.replace("%data%",
                this.jobs[job].dates) + HTMLworkLocation.replace("%data%",
                this.jobs[job].location));
            $(idSelector).append(HTMLworkDescription.replace("%data%",
                this.jobs[job].description));
            ++index;
        }
    }
}

var projects = {
    "projects": [
        {
            "title": "Portfolio Page",
            "dates": "2016",
            "description": "A portfolio page to feature all of my projects using " +
                "Bootstrap for responsiveness",
            "images": "images/portfolio.png"
    },
        {
            "title": "Resume Page",
            "dates": "2016",
            "description": "A resume page created using javascript to flesh out a " +
                "bare-bones HTML template.",
            "images": "images/resume.png"
    }
  ],
    "display": function () {
        var index = 0;
        for (project in this.projects) {
            var id = "project" + index;
            var idSelector = "#project" + index;
            $("#projects").append(HTMLprojectStart.replace("div",
                'div id="' + id + '"'));
            $(idSelector).append(HTMLprojectTitle.replace("%data%",
                this.projects[project].title));
            $(idSelector).append(HTMLprojectDates.replace("%data%",
                this.projects[project].dates));
            $(idSelector).append(HTMLprojectDescription.replace("%data%",
                this.projects[project].description));
            $(idSelector).append(HTMLprojectImage.replace("%data%",
                this.projects[project].images));
            ++index;
        }
    }
}

function internationalizeButtonDisplay(){
    $('#main').append(internationalizeButton);
}

function mapDisplay() {
    $('#mapDiv').append(googleMap);
}

bio.display();
education.display();
work.display();
projects.display();
internationalizeButtonDisplay();
mapDisplay();