/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Nathan Friedman",
  "role": "Web Developer",
  "contacts": {
    "mobile": "956-451-0530",
    "email": "codeforgreatness@gmail.com",
    "twitter": "",
    "github": "codeforgreatness",
    "blog": "www.thecodegreatness.com",
    "location": "Austin, TX"
  },
  "welcomeMessage": "Hello World",
  "skills": [
    "nunchuck skills",
    "bow-hunting skills",
    "computer hacking skills"
  ],
  "bioPic": "http://placehold.it/200x200",
  "display": function(){
    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
    //$("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
    //$("#topContacts").append(HTMLblog.replace("%data%", this.contacts.blog));
    $("#topContacts").append(HTMLlocation.replace("%data%",
      this.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", this.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    for(skill in this.skills) {
      $("#header").append(HTMLskills.replace("%data%", this.skills[skill]));
    }
  }
}

var education = {
  "schools": [
    {
      "name": "",
      "location": "",
      "degree": "",
      "majors": ["", ""],
      "dates": "",
      "url": ""
    },
    {
      "name": "",
      "location": "",
      "degree": "",
      "majors": ["", ""],
      "dates": "",
      "url": ""
    }
  ],
  "onlineCourses": [
    {
      "title": "",
      "school": "",
      "date": "",
      "url": ""
    },
    {
      "title": "",
      "school": "",
      "date": "",
      "url": ""
    }
  ],
  "display": function(){}
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
  "display": function(){
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
        this.jobs[job].dates));
      $(idSelector).append(HTMLworkLocation.replace("%data%",
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
      "images": "http://placehold.it/100x100"
    },
    {
      "title": "Resume Page",
      "dates": "2016",
      "description": "A resume page created using javascript to flesh out a " +
      "bare-bones HTML template.",
      "images": "http://placehold.it/100x100"
    }
  ],
  "display": function(){
    var index = 0;
    for(project in this.projects){
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

bio.display();
education.display();
work.display();
projects.display();
