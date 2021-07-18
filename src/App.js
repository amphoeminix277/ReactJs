import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';
import Footer from './Footer';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      series:[
        {id:0, rating: 4, title: 'Stranger Things', image: 'stranger.jpg'},
        {id:1, rating: 3, title: 'Dark', image: 'dark.jpg'},
        {id:2, rating: 5, title: 'Scream', image: 'scream.jpg'},
        {id:3, rating: 5, title: 'Sex Education', image: 'sex.jpg'},
        {id:4, rating: 5, title: 'La casa de papel', image: 'casa.jpg'},
        {id:5, rating: 5, title: 'Rick an Morty', image: 'rick.jpg'},
        {id:5, rating: 5, title: 'Chespirito', image: 'chespirito.jpg'},
        {id:5, rating: 5, title: 'Van Helsing', image: 'van.jpg'}
      ],
      copySeries: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  initSeries(){
    //this.setState({copyBooks: [...this.state.books]});
    this.setState((state,props) => ({
      copySeries: [...state.series]
    }));
  }

  componentDidMount(){
    this.initSeries();
  }

  onSearch(query){
    if(query === ''){
      this.setState({copySeries: [...this.state.series]});
    }else{

      const temp = [...this.state.series];
      var res = [];
      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
    
      this.setState({copySeries: [...res]});
    }
  }

  addItem(item){
    var temp = [...this.state.series];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({series: [...temp]});
    this.initSeries();
  }

  remove(id){
    var temp = [...this.state.series];
    const res = temp.filter(item => item.id != id);
    this.setState({series: [...res]});
    this.initSeries();
  }

  updateRating(item){
    var temp = [...this.state.series];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({series: [...temp]});
    this.initSeries();
  }

  render(){
    return (
      <div className="app">
        
        <Menu title="BENFLIX" onsearch={this.onSearch} onadd={this.addItem} />
        <h2>Series y peliculas</h2>
        <List className="list" items={this.state.copySeries} onremove={this.remove} onupdaterating={this.updateRating} />
        <Footer />
      </div>
    );
  }
}

export default App;