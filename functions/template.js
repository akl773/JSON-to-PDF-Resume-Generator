const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= name %> - Resume</title>
</head>

<body style="font-family: Arial, sans-serif; margin: 40px; color: #333; background-color: #f7f7f7;">
    <header style="display: flex; align-items: center; padding: 10px; border-bottom: 2px solid #333;">
        <a href="<%= logoLink %>" style="margin-right: 20px;"><img src="<%= logoImage %>" alt="Logo" width="50"></a>
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
            <h2 style="background-color: #9370DB; color: #fff; padding: 5px;">Skills</h2>
            <% skills.forEach(function(skill) { %>
            <p><%= skill.skillName %>: <%= skill.skillExperience %></p>
            <p>Level: <%= skill.level %></p>
            <p>Traits: <%= skill.traits %></p>
            <p>Soft Skills: <%= skill.softSkills %></p>
            <% }); %>
        </section>
        <section style="margin-bottom: 20px;">
            <h2 style="background-color: #9370DB; color: #fff; padding: 5px;">Experience</h2>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                <tr style="background-color: #f0f0f0;">
                    <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Position</th>
                    <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Start Date</th>
                    <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">End Date</th>
                    <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Duration</th>
                </tr>
                <% experienceTimeline.forEach(function(experience) { %>
                <tr>
                    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><%= experience.position %></td>
                    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><%= experience.startDate %></td>
                    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><%= experience.endDate %></td>
                    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><%= experience.duration %></td>
                </tr>
                <% }); %>
            </table>
        </section>
        <section>
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
