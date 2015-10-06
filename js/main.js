$('.oneButton').on('click', function(event){
  var btn = $(event.target);
  $('.oneButton').siblings().removeClass('notExpanded');
  $('.twoButton').siblings().addClass('notExpanded');
  $('.threeButton').siblings().addClass('notExpanded');
  $('.oneButton').siblings().addClass('expanded');
  $('.twoButton').siblings().removeClass('expanded');
  $('.threeButton').siblings().removeClass('expanded');
});

$('.twoButton').on('click', function(event){
  var btn = $(event.target);
  $('.oneButton').siblings().addClass('notExpanded');
  $('.twoButton').siblings().removeClass('notExpanded');
  $('.threeButton').siblings().addClass('notExpanded');
  $('.oneButton').siblings().removeClass('expanded');
  $('.twoButton').siblings().addClass('expanded');
  $('.threeButton').siblings().removeClass('expanded');
});

$('.threeButton').on('click', function(event){
  var btn = $(event.target);
  $('.oneButton').siblings().addClass('notExpanded');
  $('.twoButton').siblings().addClass('notExpanded');
  $('.threeButton').siblings().removeClass('notExpanded');
  $('.oneButton').siblings().removeClass('expanded');
  $('.twoButton').siblings().removeClass('expanded');
  $('.threeButton').siblings().addClass('expanded');
});



