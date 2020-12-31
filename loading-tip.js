/* *
 *  loading加载组件  
 */ 
(function(window, factory){
    if (typeof define === 'function' && define.amd) {
        //AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        //CommonJS
        module.exports = factory();
    } else {
        window.Loadingtip = factory();
    }
}(this, function(){

	var style_element = document.createElement('style');
	style_element.innerHTML = (".yw-loading{width:100%;height:100%;position:fixed;z-index:1000;top:0;bottom:0;pointer-events:auto;}.yw-loading .loading-content{width:100px;height:auto;-webkit-border-radius:5px;border-radius:5px;padding-top:10px;position:absolute;left:50%;top:50%;margin-left:-50px;margin-top:-50px;}.yw-loading .loading-box{width:36px;height:36px;margin:0 auto;animation:weuiLoading 1s steps(12,end) infinite;-webkit-animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") no-repeat;background-size:100%;}.yw-loading .loading-text{width:100%;height:24px;line-height:24px;font-size:14px;text-align:center;padding-bottom:10px;}@-webkit-keyframes weuiLoading{0%{transform:rotate3d(0,0,1,0deg);}100%{transform:rotate3d(0,0,1,360deg);}}@keyframes weuiLoading{0%{transform:rotate3d(0,0,1,0deg);}100%{transform:rotate3d(0,0,1,360deg);}}");
	document.head.appendChild(style_element);
    //  Loadingtip  
    var  Loadingtip = { 
        flag: false,
        show: function(title){// 显示加载内容
            if(this.flag){
                this.hide();
            }
           var html = ''
               + '<div class="yw-loading">'
               +     '<div class="loading-content">'
               +     '<div class="loading-box">'
               +     '</div>'
               +     '<div class="loading-text">' + (title ? title : "") + '</div>'
               +     '</div>'
               + '</div>';
            var loadingdiv = document.createElement("div");
            loadingdiv.innerHTML = html;
           document.body.appendChild(loadingdiv);
           this.flag = true;
        },  
        hide: function(){// 隐藏加载内容
            var parentdiv = document.querySelector(".yw-loading").parentNode;
            document.body.removeChild(parentdiv);
            this.flag = false;
        }
    };
    
    return Loadingtip;
    
}));
