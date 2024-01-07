

let card = {
    async drawCard() {
        let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        let data = await $.getJSON(url);
        console.log(data);
    }
}
card.drawCard()


let twoCard = {
    async drawFirst() {
        let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
        let data = await $.getJSON(url)
        console.log(data)
        console.log('suit:', data.cards[0].suit)
        console.log('value:', data.cards[0].value)
    },
    async drawSecond() {
        let url = "https://deckofcardsapi.com/api/deck/czez0a24mpv4/draw/?count=1"
        let data = await $.getJSON(url)
        console.log('suit:', data.cards[0].suit)
        console.log('value:', data.cards[0].value)
    }
}
twoCard.drawFirst()
twoCard.drawSecond()


let $btn = $('<button>')
let $stack = $('<div>')
$('body').append($btn)
$('body').append($stack)
async function setup() {

    let url = "https://deckofcardsapi.com/api/deck"
    let data = await $.getJSON(`${url}/new/shuffle/`);

    $btn.text('Draw Card').show().on('click', async function() {
      let cardData = await $.getJSON(`${url}/${data.deck_id}/draw/`);
      let src = cardData.cards[0].image;
      $stack.append(
        $('<img>', {
          src: src,
          class: 'stacked'
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();
