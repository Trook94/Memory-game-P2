# Memory-Game-Second-Project

## Table of Contents

* [General](#general)

* [How The Game Works](#how-the-game-works)

* [Resources](#resources)




## General


Udacity Front-End Developer Nanodegree Second Project

Game overview

https://trook94.github.io/Memory-game-P2/


<img src="img\pic1.JPG" alt="game-overview">
<img src="img\pic2.JPG" alt="game-overview">





## How The Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: open two hidden cards at a time to locate the ones that match!

Each turn:

The player opens one card over to reveal its underlying symbol.
The player then opens a second card, trying to find the corresponding card with the same symbol and that will be counted as one move.


If the cards match, both cards stay opened.
If the cards do not match, both cards are closed again.
The stars rating depends on the number of moves:

⭐️⭐️⭐️ If the moves are less than 17.
⭐️⭐️ If the moves are less than 21.
⭐️ If the moves are more than 22.


The game ends once all cards have been correctly matched.

The game show dilog-box after completed the game it contains

* Number of moves
* Number of stars
* How long it took to solve it

<img src="img\pic3.JPG" alt="game-overview">



The player could restart the game at any time by clicking on the restart icon or close it .






## Resources

* Shuffle function from [stackoverflow](http://stackoverflow.com/a/2450976).
