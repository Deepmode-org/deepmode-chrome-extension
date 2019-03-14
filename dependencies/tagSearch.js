// Replace with your own values
var searchClient = algoliasearch(
  '6O063WLG3P',
  '2282bb928eaf89174d97a73af07d1893' // search only API key, no ADMIN key
);

var search = instantsearch({
  indexName: 'task_categories',
  searchClient: searchClient,
  routing: true,
});

search.addWidget(
  instantsearch.widgets.configure({
    hitsPerPage: 5,
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Add tags to your task',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `{{#helpers.highlight}}{ "attribute": "category" }{{/helpers.highlight}}`,
      empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>',
    },
  })
);

search.start();