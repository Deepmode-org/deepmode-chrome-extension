import React, { PropTypes } from "react";
import algoliasearch from "algoliasearch/lite";
import IoArrowSwap from "react-icons/lib/io/arrow-swap";
import IoIosCloseEmpty from "react-icons/lib/io/ios-close-empty";
import IoIosPlusEmpty from "react-icons/lib/io/ios-plus-empty";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch-dom";

const searchClient = algoliasearch("6O063WLG3P", "0ceddc9c53f947e466efa25e923164fe");

class Hit extends React.Component {
  render() {
    const { hit, categories, updateTaskCategories } = this.props;
    const { category } = hit.hit;
    return (
      <div className="hit-text" onMouseDown={updateTaskCategories.bind(this, (categories.concat(category)))}>
        { category }
        <span><IoIosPlusEmpty /> Add</span>
      </div>
    )
  }
}

class OnTask extends React.Component {
  constructor(props) {
    super(props);
    this.removeCategory = this.removeCategory.bind(this);
    this.state = {
      searchFocused: false
    };
  }

  removeCategory(i) {
    const categories = this.props.currentTaskCategories.filter((category, j) => j !== i);
    return this.props.updateTaskCategories(categories);
  }

  render() {
    const {
      currentTaskDescription,
      currentTaskCategories,
      updateRoute,
      updateTaskCategories,
      categoriesLoading
    } = this.props;
    const categories = currentTaskCategories.map((category, i) =>
      <div key={i} className="category chip">
        {category}
        <IoIosCloseEmpty onClick={this.removeCategory.bind(this, i)} size="20" color="#e74c3c" />
      </div>
    );
    const hitsClass = this.state.searchFocused ? "show" : "d-none";

    return (
      <div className="OnTask">
        <div className="current-task">
          <div>
            <h6>Current Task</h6>
            <span>{ currentTaskDescription }</span>
          </div>
          <button onClick={updateRoute.bind(this, "/")} className="btn">
            <IoArrowSwap />
            <span>Change Task</span>
          </button>
        </div>
        <div className={categoriesLoading ? "loading loading-lg": "d-none"}>
        </div>
        <p className={categoriesLoading ? "": "d-none"}>Loading categories...</p>
        <div className={categoriesLoading ? "d-none" : "categories"}>
          {categories}
        </div>
        <div className="category-search">
          <InstantSearch searchClient={searchClient} indexName="task_categories">
            <SearchBox
              translations={{ placeholder: "Search and click to add a category..." }}
              onFocus={(e) => this.setState({ searchFocused: true })}
              onBlur={(e) => this.setState({ searchFocused: false })} />
            <Hits
              className={hitsClass}
              hitComponent={hit =>
                <Hit
                  hit={hit}
                  categories={currentTaskCategories}
                  updateTaskCategories={updateTaskCategories} /> } />
          </InstantSearch>
        </div>
        <p className="text-center text-small">
          These categories are used to understand what’s relevant
          to your task. You can tweak this by deleting categories that
          don’t apply and searching to add more categories.
        </p>
      </div>
    );
  }
}

OnTask.propTypes = {};

export default OnTask;
