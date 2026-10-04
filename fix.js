const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'login.html' && f !== 'dashboard.html');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Match single icon-btn for account and replace with header-auth container
  const regex = /<a href="login\.html" class="icon-btn"[^>]*>[\s\S]*?<\/a>/g;
  if (regex.test(content)) {
    content = content.replace(regex, `<div class="header-auth">
        <a href="login.html" class="btn-login">Log In</a>
        <a href="login.html#signup" class="btn-get-started">Get Started</a>
      </div>`);
    fs.writeFileSync(f, content);
    console.log('Updated header in: ' + f);
  }
});
console.log('Done header updating!');
