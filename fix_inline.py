import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove inline styles for .project-image
content = content.replace(' style="height: 180px; overflow: hidden; border-bottom: 1px solid var(--border-color);"', '')
# Remove inline styles for the images inside .project-image
content = content.replace(' style="width: 100%; height: 100%; object-fit: cover;"', '')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
