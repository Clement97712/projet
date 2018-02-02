import React, { Component } from 'react';
import Bouton from './Component/Bouton';

import './App.css';

class App extends Component {
  
  
  
   
  state={
      taille:14,
      table:{
        tab:["./Images/picture.jpg","./Images/picture2.jpg","./Images/picture3.jpg"]
      },
      i:0,
      choix:0

    }
    

    previous=()=>{
       this.state.choix =this.state.table.tab.length;
      console.log(this.state.choix);
      this.setState=({
        choix:this.state.choix
      });

    }
    

    next=()=>{

 
  }

  render() {
    
       
     
    return (
      <div className="Footer">
            <footer className="contenu">
                <div className="home"><i className="fa fa-home" aria-hidden="true"> MaisondesArtistes@gmail.com </i></div>
                <div className="call"><i className="fa fa-phone" aria-hidden="true"> 0590 87 65 99</i></div>
                <div className="alignement">
                  <div className='icon social fb'><i className='fa fa-facebook'></i></div>
                  <div className='icon social tw'><i className='fa fa-twitter'></i></div>
                  <div className='icon social in'><i className='fa fa-instagram'></i></div>
                </div>
            </footer>
            <div className="container">
            <span>Accueil</span>
            <span>Presentation</span>
            <span>Atelier</span>
            <span>Createur</span>
            <span>Contact</span>
          </div>
          <div className="container2">
              <div>
               <p>Made with <i class="fa fa-heart"></i> by Simplon MG </p>
              </div>
              <div>
                  <p>Mention Légale <i className="fa fa-arrow-right" ></i></p>
              </div>

            </div>

        </div> 
    );
  }
}

export default App;
