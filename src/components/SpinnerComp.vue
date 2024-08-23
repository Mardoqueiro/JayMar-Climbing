<template>
            
              <div class="main-load">
                <span class="letter letter1">N</span>
                <span class="letter letter2">e</span>
                <span class="letter letter3">v</span>
                <span class="letter letter4">e</span>
                <span class="letter letter5">r</span>
                <span class="letter letter6"> </span>
                <span class="letter letter7">G</span>
                <span class="letter letter8">o</span>
                <span class="letter letter9">n</span>
                <span class="letter letter10">n</span>
                <span class="letter letter11">a</span>
                <span class="letter letter12"> </span>
                <span class="letter letter13">G</span>
                <span class="letter letter14">i</span>
                <span class="letter letter15">v</span>
                <span class="letter letter16">e</span>
                <span class="letter letter17"> </span>
                <span class="letter letter18">U</span>
                <span class="letter letter19">p</span>
                <span class="letter letter20"> </span>
                <span class="letter letter21">C</span>
                <span class="letter letter22">l</span>
                <span class="letter letter23">i</span>
                <span class="letter letter24">m</span>
                <span class="letter letter25">b</span>
                <span class="letter letter26">i</span>
                <span class="letter letter27">n</span>
                <span class="letter letter28">g</span>
              </div>
       

</template>
<script>
export default {
    name: 'SpinnerComp'
}
</script>
<style>

.main-load {
  min-height: 3rem;
  min-width: 20rem;
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0)
  );
  font-family: monospace;
}

.letter {
  width: 1ch;
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  left: 100%;
  animation: scroll 3.5s linear infinite;
}

@keyframes scroll {
  to {
    left: -1ch;
  }
}
.letter1 {
  animation-delay: calc(3.5s / 28 * (28 - 1) * -1);
}
.letter2 {
  animation-delay: calc(3.5s / 28 * (28 - 2) * -1);
}
.letter3 {
  animation-delay: calc(3.5s / 28 * (28 - 3) * -1);
}
.letter4 {
  animation-delay: calc(3.5s / 28 * (28 - 4) * -1);
}
.letter5 {
  animation-delay: calc(3.5s / 28 * (28 - 5) * -1);
}
.letter6 {
  animation-delay: calc(3.5s / 28 * (28 - 6) * -1);
}
.letter7 {
  animation-delay: calc(3.5s / 28 * (28 - 7) * -1);
}
.letter8 {
  animation-delay: calc(3.5s / 28 * (28 - 8) * -1);
}
.letter9 {
  animation-delay: calc(3.5s / 28 * (28 - 9) * -1);
}
.letter10 {
  animation-delay: calc(3.5s / 28 * (28 - 10) * -1);
}
.letter11 {
  animation-delay: calc(3.5s / 28 * (28 - 11) * -1);
}
.letter12 {
  animation-delay: calc(3.5s / 28 * (28 - 12) * -1);
}
.letter13 {
  animation-delay: calc(3.5s / 28 * (28 - 13) * -1);
}
.letter14 {
  animation-delay: calc(3.5s / 28 * (28 - 14) * -1);
}
.letter15 {
  animation-delay: calc(3.5s / 28 * (28 - 15) * -1);
}
.letter16 {
  animation-delay: calc(3.5s / 28 * (28 - 16) * -1);
}
.letter17 {
  animation-delay: calc(3.5s / 28 * (28 - 17) * -1);
}
.letter18 {
  animation-delay: calc(3.5s / 28 * (28 - 18) * -1);
}
.letter19 {
  animation-delay: calc(3.5s / 28 * (28 - 19) * -1);
}
.letter20 {
  animation-delay: calc(3.5s / 28 * (28 - 20) * -1);
}
.letter21 {
  animation-delay: calc(3.5s / 28 * (28 - 21) * -1);
}
.letter22 {
  animation-delay: calc(3.5s / 28 * (28 - 22) * -1);
}
.letter23 {
  animation-delay: calc(3.5s / 28 * (28 - 23) * -1);
}
.letter24 {
  animation-delay: calc(3.5s / 28 * (28 - 24) * -1);
}
.letter25 {
  animation-delay: calc(3.5s / 28 * (28 - 25) * -1);
}
.letter26 {
  animation-delay: calc(3.5s / 28 * (28 - 26) * -1);
}
.letter27 {
  animation-delay: calc(3.5s / 28 * (28 - 27) * -1);
}
.letter28 {
  animation-delay: calc(3.5s / 28 * (28 - 28) * -1);
}

</style>
