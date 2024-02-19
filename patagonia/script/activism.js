$(function(){


  //section : effort > slide_progress_bar

  let showIdx = $(".effort_desc > ul > li .desc_info");
  let idxCount = showIdx.length;
  let firstIdx = 0;
  let progress = $(".slide_progress_bar");

  showIdx.hide().eq(firstIdx).show();
  progress.hide().eq(firstIdx).show();

  setInterval(showNextIndex, 4000);

  function showNextIndex(){
    let nextIndex = (firstIdx + 1) % idxCount;
    showIdx.eq(firstIdx).hide(200);
    showIdx.eq(nextIndex).show(300);
    progress.eq(firstIdx).hide();
    progress.eq(nextIndex).show();
    firstIdx = nextIndex;
  }











});