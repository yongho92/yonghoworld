var _w;
var _wW;
var _wH;
var _body;
var _slideList;
var _mySwiper;

var _current;
var _total;
var _totalText;
var _bar;

function init()
{
create();
addEvent();
loadStart();
mainSlide();
barMotion();
showCount();
}

function create()
{

_w = $( window );
_body = $( "body" );
_slideList = $( ".swiper-wrapper" );
_current = $( ".curront_num" );
_total = _slideList.children( "div" ).length;
_totalText = $( ".max" );
_bar = $( ".bar" );
}

function addEvent()
{
resizeEvent( null );
_w.on( "resize", resizeEvent );
}

function loadStart()
{
TweenMax.set( _body, { opacity: 0 });
TweenMax.to( _body, 0.1, { opacity: 1, ease:Power0.easeIn, onComplete:function(){
_totalText.text( _total );
}});
}

var _indexSwiper = 0;

function showCount()
{
_current.text( _indexSwiper + 1 );
}

function resizeEvent()
{
_wW = _w.width();
_wH = _w.height();
_slideList.css({ width: _wW, height: _wH });
}

function mainSlide()
{
_mySwiper = new Swiper('.swiper-container', {
pagination:{
watchSlidesProgress: true,
autoplay: 5000
},
on: {
slideChange : function()
{
_indexSwiper = _mySwiper.activeIndex;

showCount();
barMotion();
}
}
});
}

function barMotion()
{
TweenMax.killTweensOf( _bar );
TweenMax.set( _bar, { width: "0%" });
TweenMax.to( _bar, 5, { width: "100%", ease:Power0.easeIn, onComplete:function(){

_indexSwiper ++;
console.log( _indexSwiper );

showSwiper( _indexSwiper );
barMotion();
}});
}

function showSwiper( $index )
{
if( $index < 0 )
{
_indexSwiper = 0;
}else if( _indexSwiper >= _total )
{
_indexSwiper = 0;
}
_mySwiper.slideTo( _indexSwiper );
}


