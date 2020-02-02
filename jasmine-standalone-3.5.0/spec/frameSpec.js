describe('frame', function() {
  it('has two balls per frame', function() {
    frame = new Frame(3, 4)
    expect(frame.ballOne).toEqual(3)
    expect(frame.ballTwo).toEqual(4)
  })
})