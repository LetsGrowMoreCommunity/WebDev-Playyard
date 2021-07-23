$(".numbers").on('click','li',function(e){
  e.preventDefault();
  $v = $(this).html(),
  $r = $('.result');
  if($r.text()==0){$r.empty()}
  if($v==="=" ) {
    r = eval($r.text());
    $r.empty().append(r);
    return true;}
  if($v==="c" ) {$r.empty().append(0);return true;}
  $r.append($v)
})