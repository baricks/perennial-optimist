import React, { Component } from 'react';

var sentiment = require('sentiment');

var output
var output_sent
var sent_score
var mood
var response
var target_words
var new_output

var positive_words = [
  "happy",
  "ecstatic",
  "overjoyed",
  "blissful",
  "delirious",
  "enthusiastic",
  "euphoric",
  "fervent"
]

class Formy extends Component {

  constructor( props ) {
    super()
    this.state = {
      value: 'Start typing here...',
    }
  }

  // Handle the click & submit events

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit () {

    output = this.state.value;
    output_sent = sentiment(output);
    sent_score = output_sent.score;
    target_words = output_sent.negative


    if (sent_score >= 3 && sent_score <= 100 ){
      mood = 'very happy :)'
    } else if (sent_score >= 0 && sent_score <= 2){
      mood = 'pretty happy'
    } else if (sent_score <=0 && sent_score >= -2){
      mood = 'pretty sad'
    } else if (sent_score <= -3 && sent_score >= -100){
      mood = 'very sad :('
    } else {mood = 'neutral'}

    response = 'Based on our analysis of your mood, you feel ' + mood + '. Let me help you.'

    console.log(sent_score);
    console.log(target_words);

    // Handle sentiment score

    for (var i=0; i<target_words.length; i++) {
      new_output = output.replace(target_words[i], positive_words[i])
    }

    this.forceUpdate();
  }


  render() {

    return (
      <div>
        <textarea
          onChange={this.handleChange.bind(this)}
          type="text"
          className="box"
          value={this.state.value}
        />
        <br/><br/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>&nbsp;&nbsp;&nbsp;
        <label className="custom-file-upload"> <input type="file"/></label><br/><br/>
        <div>Output:<br/><br/>{response}</div><br/><br/>
        <div className="update">{new_output}</div>
      </div>
    )
  }
}

export default Formy;
