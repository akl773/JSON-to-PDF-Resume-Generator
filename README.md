# JSON-to-PDF-Resume-Generator
This Node.js Google Cloud Function generates a PDF resume from a JSON payload.

## Prerequisites

* Node.js 14+
* npm 6+
* Google Cloud SDK

## Installation
```
npm install
```

## Deployment

gcloud functions deploy api --region asia-south1


## Usage

The function can be invoked with the following POST request:

``` POST /resume/toPdf```


## Deployment

gcloud functions deploy api --region asia-south1


## Usage

The function can be invoked with the following POST request:

POST /resume/toPdf


The request body must be a JSON object with the following properties:

* `managementCertification`: The management certification that the user holds.
* `name`: The user's name.
* `aboutMe`: A brief description of the user.
* `keyHighlights`: An array of key highlights about the user.
* `skills`: An array of skills that the user has.
* `experienceTimeline`: An array of work experience entries.
* `projects`: An array of project entries.

The function will return a PDF file with the resume content.

## Example

The following example shows how to generate a PDF resume from a JSON payload:

```
const requestBody = {
    "managementCertification": "PMP",
    "name": "John Doe",
    "aboutMe": "I am a software engineer with 10 years of experience. I am proficient in Java, Python, and JavaScript. I am also experienced in cloud computing and DevOps.",
    "keyHighlights": [
        {
            "name": "Leadership",
            "value": "Managed a team of 10 engineers."
        },
        {
            "name": "Technical Skills",
            "value": "Expertise in Java, Python, and JavaScript."
        },
        {
            "name": "Cloud Computing",
            "value": "Deployed applications on AWS and Azure."
        }
    ],
    "skills": [
        {
            "skillName": "Java",
            "skillExperience": "5 years",
            "level": "Expert"
        },
        {
            "skillName": "Python",
            "skillExperience": "3 years",
            "level": "Intermediate"
        },
        {
            "skillName": "JavaScript",
            "skillExperience": "2 years",
            "level": "Beginner"
        }
    ],
    "experienceTimeline": [
        {
            "position": "Software Engineer",
            "startDate": "2012-01-01",
            "endDate": "2015-12-31",
            "duration": "3 years"
        },
        {
            "position": "Senior Software Engineer",
            "startDate": "2015-12-31",
            "endDate": "2022-01-01",
            "duration": "7 years"
        }
    ],
    "projects": [
        {
            "title": "Project A",
            "timeFrame": "2017-01-01 to 2018-01-01",
            "rolesAndResponsibility": "Developed and deployed a new application."
        },
        {
            "title": "Project B",
            "timeFrame": "2018-01-01 to 2019-01-01",
            "rolesAndResponsibility": "Migrated an existing application to the cloud."
        }
    ]
};

const response = await fetch("{baseUrl}/resume/toPdf", {
    method: "POST",
    body: JSON.stringify(requestBody)
});

const pdf = await response.blob();

const file = new File([pdf], "resume.pdf");

file.save();

```


This code will generate a PDF file named `resume.pdf` with the resume content.
