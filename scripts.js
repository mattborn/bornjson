async function loadSprintData() {
  try {
    const response = await fetch('born.json')
    const data = await response.json()
    const sprintList = document.getElementById('sprint-list')

    data.forEach(sprint => {
      const sprintRow = document.createElement('div')
      sprintRow.className = 'sprint-row'

      const columns = `
        <div class="sprint-column">
          <div class="title">${sprint.title}</div>
          <div class="project">${sprint.project}</div>
        </div>

        <div class="sprint-column">
          <pre><code class="language-json">${JSON.stringify(sprint.not, null, 2)}</code></pre>
        </div>

        <div class="sprint-column">
          <pre><code class="language-json">${JSON.stringify(sprint.but, null, 2)}</code></pre>
        </div>
      `

      sprintRow.innerHTML = columns
      sprintList.appendChild(sprintRow)
    })

    // Highlight all code blocks after they're added
    Prism.highlightAll()
  } catch (error) {
    console.error('Error loading sprint data:', error)
  }
}

document.addEventListener('DOMContentLoaded', loadSprintData)
