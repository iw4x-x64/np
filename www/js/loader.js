const sections = [
  'header',
  'hero',
  'footer'
];

async function
load_sections ()
{
  const app = document.getElementById ('app');

  if (!app)
    throw new Error ("element 'app' not found");

  const main = document.createElement ('main');
  main.className = 'main-container';

  // Load all sections in parallel.
  //
  const load_promises = sections.map (section =>
    fetch (`sections/${section}.html`)
      .then (response => {
        if (!response.ok)
          throw new Error (`failed to load section '${section}'`);
        return response.text ();
      })
      .then (html => ({section, html}))
  );

  const results = await Promise.all (load_promises);

  // Append sections in order.
  //
  for (const {section, html} of results)
  {
    const temp = document.createElement ('div');
    temp.innerHTML = html;

    const nodes = Array.from (temp.childNodes);

    if (section === 'header')
    {
      nodes.forEach (n => app.appendChild (n));
      app.appendChild (main);
    }
    else if (section === 'footer')
    {
      if (!app.contains (main))
        app.appendChild (main);

      nodes.forEach (n => app.appendChild (n));
    }
    else
    {
      if (!app.contains (main))
        app.appendChild (main);

      nodes.forEach (n => main.appendChild (n));
    }
  }

  // Signal completion.
  //
  document.dispatchEvent (new Event ('sectionsLoaded'));
}

load_sections ();
