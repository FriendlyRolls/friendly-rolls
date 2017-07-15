import React, { Component } from 'react'
import CharacterList from '../../Components/CharacterList/index.jsx'
import CharacterCard from '../../Components/CharacterCard/index.jsx'
import './styles.less'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
class CharacterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { campaignID: "CampaignID",
          name: "AdventureMan",
          image: "http://www.google.com"
        },
        { campaignID: "ID23516635246363",
          name: "Other Adventure Guy",
          image: "http://www.amazon.com"
        },
        { campaignID: "ID23516635246363",
          name: "Dwarf",
          image: "http://www.amazon.com"
        }
      ],
    }
  }
  render () {
    return (
      <div id="character-page-wrapper">
        <header>
          {/* The button to return to the other page will go here as well */}
          <h1>Select your character</h1>
        </header>
        <section className="character-list-container">
          <section>
            <div className="character-list-panel">
              <CharacterList characters={this.state.characters} />
            </div>
          </section>
          <section className="button-div">
            <div className="add-character-button">
              <button>ADD</button>
            </div>
          </section>
        </section>
      </div>
    )
  }
}
export default CharacterPage;
