var data = "%data%";
var $header = $("#header");
var $topContacts = $("#topContacts");
var $bio = $("#bio");
var $footerContacts = $("#footerContacts");
var $education = $("#education");
var $workExperience = $("#workExperience");
var $projects = $("#projects");

var bio = {
    "name": "Nathan Friedman",
    "role": "Web Developer",
    "contacts": {
        "mobile": "956-451-0530",
        "email": "codeforgreatness@gmail.com",
        "twitter": "@code4greatness",
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
    "biopic": "images/biopic.jpg",
    "display": function () {
        $header.prepend(HTMLheaderRole.replace(data, this.role));
        $header.prepend(HTMLheaderName.replace(data, this.name));
        $topContacts.append(HTMLmobile.replace(data, this.contacts.mobile));
        $topContacts.append(HTMLemail.replace(data, this.contacts.email));
        $topContacts.append(HTMLtwitter.replace(data, this.contacts.twitter));
        $topContacts.append(HTMLgithub.replace(data,
            '<a href="http://github.com/' + this.contacts.github + '">' + this.contacts.github + '</a>'));
        //$topContacts.append(HTMLblog.replace(data, this.contacts.blog));
        $topContacts.append(HTMLlocation.replace(data,
            this.contacts.location));
        $bio.append(HTMLbioPic.replace(data, this.biopic));
        $bio.append(HTMLwelcomeMsg.replace(data, this.welcomeMessage));
        $("#bioRight").append(HTMLskillsStart);
        for (var i = 0, len = this.skills.length; i < len; ++i) {
            $("#skillsList").append(HTMLskills.replace(data, this.skills[i]));
        }
        $footerContacts.append(HTMLmobile.replace(data, this.contacts.mobile));
        $footerContacts.append(HTMLemail.replace(data, this.contacts.email));
        $footerContacts.append(HTMLtwitter.replace(data, this.contacts.twitter));
        $footerContacts.append(HTMLgithub.replace(data,
            '<a href="http://github.com/' + this.contacts.github + '">' +
            this.contacts.github + '</a>'));
    }
};

var education = {
    "schools": [
        {
            "name": "University of Texas",
            "location": "Austin, TX",
            "degree": "Bachelor of Science - Incomplete",
            "majors": ["Computer Science", "Mathematics"],
            "dates": "2009-2013",
            "url": "http://www.utexas.edu"
    },
        {
            "name": "University of Texas",
            "location": "Austin, TX",
            "degree": "Bachelor of Arts",
            "majors": ["Government (Political Science)", "Middle Eastern Studies"],
            "dates": "2006-2008",
            "url": "http://www.utexas.edu"
    },
        {
            "name": "Udacity",
            "location": "Online",
            "degree": "Nanodegree",
            "majors": ["Front-End Web Development"],
            "dates": "2016-Present",
            "url": "http://www.udacity.com"
    }
  ],
    "onlineCourses": [
        {
            "title": "Building Web Applications with Node.js and Express 4.0",
            "school": "Pluralsight",
            "date": "2016",
            "url": "http://app.pluralsight.com/courses/nodejs-express-web-applications"
    },
        {
            "title": "Introduction to Node.js",
            "school": "Pluralsight",
            "date": "2016",
            "url": "http://app.pluralsight.com/courses/node-inro"
    },
        {
            "title": "jQuery: Getting Started",
            "school": "Pluralsight",
            "date": "2016",
            "url": "http://app.pluralsight.com/courses/jquery-getting-started"
    },
        {
            "title": "Quick Start to JavaScript: Volume 3",
            "school": "Pluralsight",
            "date": "2016",
            "url": "http://app.pluralsight.com/courses/quick-start-javascript-3-1918"
    },
        {
            "title": "Quick Start to JavaScript: Volume 2",
            "school": "Pluralsight",
            "date": "2016",
            "url": "http://app.pluralsight.com/courses/quick-start-javascript-2-1917"
    },
        {
            "title": "Quick Start to JavaScript: Volume 1",
            "school": "Pluralsight",
            "date": "2016",
            "url": "http://app.pluralsight.com/courses/quick-start-javascript-1-1870"
    }
  ],
    "display": function () {
        var id = "";
        var idSelector = "";
        for (var i = 0, len = this.schools.length; i < len; ++i) {
            id = "school" + i;
            idSelector = "#school" + i;
            $education.append(HTMLschoolStart.replace("div",
                'div id="' + id + '"'));
            $(idSelector).append(HTMLschoolName.replace(data,
                this.schools[i].name) + HTMLschoolDegree.replace(data,
                this.schools[i].degree));
            $(idSelector).append(HTMLschoolDates.replace(data,
                this.schools[i].dates) + HTMLschoolLocation.replace(data,
                this.schools[i].location));
            $(idSelector).append(HTMLschoolMajor.replace(data,
                this.schools[i].majors));
        }
        $education.append(HTMLonlineClasses);
        for (var i = 0, len = this.onlineCourses.length; i < len; ++i) {
            id = "course" + i;
            idSelector = "#course" + i;
            $education.append('<div id="' + id +
                '" class="education-entry row"></div>');
            $(idSelector).append(HTMLonlineTitle.replace('#">%data%',
                this.onlineCourses[i].url + '">' +
                this.onlineCourses[i].title) + HTMLonlineSchool.replace(data,
                this.onlineCourses[i].school));
            $(idSelector).append(HTMLonlineDates.replace(data,
                this.onlineCourses[i].date));
        }
    }
};

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
        var id = "";
        var idSelector = "";
        for (var i = 0, len = this.jobs.length; i < len; ++i) {
            id = "job" + i;
            idSelector = "#job" + i;
            $workExperience.append(HTMLworkStart.replace("div",
                'div id="' + id + '"'));
            $(idSelector).append(
                HTMLworkEmployer.replace(data, this.jobs[i].employer) +
                HTMLworkTitle.replace(data, this.jobs[i].title)
            );
            $(idSelector).append(HTMLworkDates.replace(data,
                this.jobs[i].dates) + HTMLworkLocation.replace(data,
                this.jobs[i].location));
            $(idSelector).append(HTMLworkDescription.replace(data,
                this.jobs[i].description));
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Portfolio Page",
            "dates": "2016",
            "description": "A portfolio page to feature all of my projects using " +
                "Bootstrap for responsiveness",
            "images": ["images/portfolio.png"]
    },
        {
            "title": "Resume Page",
            "dates": "2016",
            "description": "A resume page created using javascript to flesh out a " +
                "bare-bones HTML template.",
            "images": ["images/resume.png"]
    }
  ],
    "display": function () {
        var id = "";
        var idSelector = "";
        for (var i = 0, len = this.projects.length; i < len; ++i) {
            id = "project" + i;
            idSelector = "#project" + i;
            $projects.append(HTMLprojectStart.replace("div",
                'div id="' + id + '"'));
            $(idSelector).append(HTMLprojectTitle.replace(data,
                this.projects[i].title));
            $(idSelector).append(HTMLprojectDates.replace(data,
                this.projects[i].dates));
            $(idSelector).append(HTMLprojectDescription.replace(data,
                this.projects[i].description));
            $(idSelector).append('<div class="row"></div>');
            var $imgRow = $(idSelector).children().last();
            for (var j = 0, len2 = this.projects[i].images.length; j < len2; ++j) {
                $imgRow.append(HTMLprojectImage.replace(data, this.projects[i].images[j]));
            }
        }
    }
};

function internationalizeButtonDisplay() {
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