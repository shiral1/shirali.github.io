function renderProjects(projects) {
  const inProgress = document.getElementById('in-progress-list');
  const finished = document.getElementById('finished-list');

  projects.forEach(p => {
    const el = document.createElement('a');
    el.className = 'project-item';
    el.href = p.url || '#';
    el.target = '_blank';
    el.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <span class="project-tag">${p.tag}</span>
    `;
    if (p.status === 'finished') {
      finished.appendChild(el);
    } else {
      inProgress.appendChild(el);
    }
  });
}

fetch('projects.json')
  .then(res => res.json())
  .then(renderProjects)
  .catch(() => {
    document.getElementById('in-progress-list').innerHTML =
      '<p style="color:var(--muted);font-size:0.9rem">Could not load projects.</p>';
  });