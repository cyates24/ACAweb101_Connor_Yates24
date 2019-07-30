$(document).ready(function (){
$('.drag-box').draggable({
  snap: '#snapDiv,#snapDiv1,#snapDiv2',
  snapTolerance : 50,
  cancel : '#snapDiv'
});
});

