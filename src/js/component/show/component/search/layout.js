//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _     from 'lodash';
import $     from 'jquery';
import React from 'react';
import fetch from 'node-fetch'

//-----------------------------------------------------------------------------//

function parseShowData(data){

  let episodes = data._embedded.episodes;
  let seasons  = [];

  episodes.forEach(function(episode){
    let season = episode.season;
    if(seasons[season-1]==undefined){
      seasons.push([episode]);
    }
    else
    {
      seasons[season-1].push(episode);
    }
  });

  return {
    name:    data.name,
    image:   data.image.medium,
    summary: data.summary,
    seasons: seasons
  };
}

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props)
    this.changedTitle  = this.changedTitle.bind(this);
    this.clickedSearch = this.clickedSearch.bind(this);
    this.submit        = this.submit.bind(this);
    this.state = {
      title: ''
    }
  }

  changedTitle(){
    this.props.actionSearchFailed(false);
    let title = $('#search-title').val();
    this.setState({
      title: title
    })
  }

  fetchShow(){
    let props  = this.props;
    let search = $('#search-title').val();
    let url    = `https://api.tvmaze.com/singlesearch/shows?q=${search}&embed=episodes`;
  
    if(this.isValid()){
  
      props.actionLoading(true);
      props.actionResetSearch();
  
      fetch(url)
  
      // Promise to return json data.
  
      .then(function(res){
          return res.json();
      })
  
      // Handle json data.
  
      .then(function(json){
        props.actionLoading(false);
        props.actionShowDetail(parseShowData(json));
      })
      
      .catch(function(){
        props.actionLoading(false);
        props.actionSearchFailed(true);
      });
    }

  }

  submit(e){
    e.preventDefault();
    this.fetchShow();
  }

  clickedSearch(){
    this.fetchShow();
  }

  isValid(){
    let flag  = true;

    if(this.state.title.length <= 2){
      flag = false;
    }
    if(this.props.state.fetch){
      flag = false;
    }
    return flag;
  }

  render() {

    let isValid     = this.isValid();
    let buttonClass = 'btn btn-primary mt-2 float-right';

    if(!isValid){
      buttonClass += ' disabled';
    }

    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form onSubmit={this.submit}>
                <div className="form-group">
                  <label htmlFor="search-title">Title Search</label>
                  <input type="text" className="form-control" id="search-title" placeholder="Input a title here..." onChange={this.changedTitle}/>
                </div>


                <div className="form-row">
                  <div className="col-12">
                    <button type="button" className={buttonClass} id="search-button" onClick={this.clickedSearch}>
                      GO
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
