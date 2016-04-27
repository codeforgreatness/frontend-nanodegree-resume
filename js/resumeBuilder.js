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
    $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
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
      " JavaScript, C#, SQL Server) in two weeks.\nContributed to development" +
      "initiatve..."
    },
    {
      "employer": "Internal Revenue Service",
      "title": "Correspondence Exam Technician",
      "location": "Austin, TX",
      "dates": "2008-2009",
      "description": "Managed a caseload of 150 Correspondence audits at one" +
      " time.\nReceived inbound customer calls to discuss tax law and details" +
      " specific to individual taxpayer audits."
    }
  ],
  "display": function(){
    var index = 0;
    for (job in this.jobs) {
      var id = "job" + index;
      var idSelector = "#job" + index;
      $("#workExperience").append(HTMLworkStart.replace("div", 'div id="' + id + '"'));
      $(idSelector).append(HTMLworkEmployer.replace("%data%", this.jobs[job].employer));
      $(idSelector).append(HTMLworkTitle.replace("%data%", this.jobs[job].title));
      $(idSelector).append(HTMLworkDates.replace("%data%", this.jobs[job].dates));
      $(idSelector).append(HTMLworkLocation.replace("%data%", this.jobs[job].location));
      $(idSelector).append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
      ++index;
    }
  }
}

var projects = {
  "projects": [
    {
      "title": "",
      "dates": "",
      "description": "",
      "images": ""
    },
    {
      "title": "",
      "dates": "",
      "description": "",
      "images": ""
    }
  ],
  "display": function(){}
}

bio.display();
education.display();
work.display();
projects.display();
