"use strict";


describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard()
  })

  it('starts a game empty', function(){
    expect(scoreCard.game.length).toEqual(0)
  })

  it('pushes a frame into the array each round', function(){
    scoreCard.play(6, 2)
    expect(scoreCard.game.length).toEqual(1)
  })

  it('adds the values to the frame', function() {
    scoreCard.play(4, 5)
    expect(scoreCard.game[0].ballOne).toEqual(4)
  })

  it('calculates the current round', function() {
    for(var i = 0; i < 3; i++) {
      scoreCard.play(4, 5)
    }
    scoreCard.play(6, 2)
    expect(scoreCard.currentRound()).toEqual(4)
    expect(scoreCard.game[3].ballOne).toEqual(6)
    console.log(scoreCard.game)
  })

  it('adds the frame score', function() {
    scoreCard.play(5, 4)
    expect(scoreCard.frameScore()).toEqual(9)
  })
  
  it('adds the frame scores', function(){
    scoreCard.play(5, 4)
    scoreCard.play(6, 2)
    expect(scoreCard.currentScore()).toEqual(17)
  })

  it('it evaluates if its a spare', function() {
    scoreCard.play(5, 5)
    expect(scoreCard.isSpare()).toBe(true)
  })

  it('evaluates if a round is a strike', function() {
    scoreCard.play(10, 0)
    expect(scoreCard.isStrike()).toBe(true)
  })

  it('caluclates that gutter game', function(){
    for(var i = 0; i < 10; i++) {
      scoreCard.play(0, 0)
    }
    expect(scoreCard.score).toEqual(0)
  })


})