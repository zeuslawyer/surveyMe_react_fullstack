const secrets = require("../../config/secrets");

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${secrets.emailClickRedirectDomain}/api/surveys/thanks">Yes</a>
    
          </div>
          <div>
            <a href="${secrets.emailClickRedirectDomain}">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
