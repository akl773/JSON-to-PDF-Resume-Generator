const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= name %> - Resume</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 40px; color: #333; background-color: #f7f7f7;">
    <header style="display: flex; align-items: center; padding: 10px; border-bottom: 2px solid #333;">
        <a style="margin-right: 20px;"><img src="./images/logo.jpeg" alt="Logo" width="50"></a>
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
