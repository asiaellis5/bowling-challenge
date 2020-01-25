"use strict";

describe('ScoreCard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard()
  })

  describe('score', function() {
    it('starts a game with a score of 0', function() {
      expect(scorecard.currentScore()).toEqual(0)
    })
  })
})