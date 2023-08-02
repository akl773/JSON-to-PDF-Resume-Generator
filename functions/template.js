const encodedImage = `data:image/jpeg;base64,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`

const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= name %> - Resume</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 40px; color: #333; background-color: #f7f7f7;">
    <header style="display: flex; align-items: center; padding: 10px; border-bottom: 2px solid #333;">
        <a style="margin-right: 20px;"><img src="${encodedImage}" alt="Logo" width="50"></a>
        <h1 style="margin: 0;"><%= name %></h1>
        <p style="margin-left: auto;"><%= managementCertification %></p>
    </header>
    <main style="padding: 20px; background-color: #fff; border-radius: 8px;">
        <section style="margin-bottom: 20px;">
            <h2 style="background-color: #9370DB; color: #fff; padding: 5px;">About Me</h2>
            <p><%= aboutMe %></p>
        </section>
        <section style="margin-bottom: 20px;">
            <h2 style="background-color: #9370DB; color: #fff; padding: 5px;">Contact Information</h2>
            <ul style="list-style: none; padding: 0;">
                <% keyHighlights.forEach(function(highlight) { %>
                <li><%= highlight.name %>: <%= highlight.value %></li>
                <% }); %>
            </ul>
        </section>
       <section style="margin-bottom: 20px;">
    <h2 style="background-color: #9370DB; color: #fff; padding: 10px; border-radius: 8px 8px 0 0; margin: 0;">Skills</h2>
    <table style="width: 100%; border-collapse: collapse; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <tr style="background-color: #f7f7f7;">
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Skill</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Experience</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Level</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Traits</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Soft Skills</th>
        </tr>
        <% skills.forEach(function(skill, index) { %>
        <tr style="<% if (index % 2 === 0) { %>background-color: #f9f9f9;<% } %>">
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= skill.skillName %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= skill.skillExperience %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= skill.level %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= skill.traits %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= skill.softSkills %></td>
        </tr>
        <% }); %>
    </table>
</section>

        <section style="margin-bottom: 20px;">
    <h2 style="background-color: #9370DB; color: #fff; padding: 10px; border-radius: 8px 8px 0 0; margin: 0;">Experience</h2>
    <table style="width: 100%; border-collapse: collapse; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <tr style="background-color: #f7f7f7;">
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Position</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Start Date</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">End Date</th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Duration</th>
        </tr>
        <% experienceTimeline.forEach(function(experience, index) { %>
        <tr style="<% if (index % 2 === 0) { %>background-color: #f9f9f9;<% } %>">
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= experience.position %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= experience.startDate %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= experience.endDate %></td>
            <td style="padding: 12px; border-bottom: 1px solid #ddd;"><%= experience.duration %></td>
        </tr>
        <% }); %>
    </table>
</section>
            <h2 style="background-color: #9370DB; color: #fff; padding: 5px;">Projects</h2>
            <% projects.forEach(function(project) { %>
            <h3 style="color: #555;"><%= project.title %></h3>
            <p>Time Frame: <%= project.timeFrame %></p>
            <ul style="margin-left: 20px; color: #555;">
            <% project.keyParts.forEach(function(part) { %>
            <li><%= part %></li>
            <% }); %>
            </ul>
            <p>Roles and Responsibility: <%= project.rolesAndResponsibility %></p>
            <% }); %>
        </section>
    </main>
</body>

</html>`;

module.exports = template;
