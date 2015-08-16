window.onload= function() {
    var oAllChooose = document.querySelector(".all-choose");
    var oOtherChooose = document.querySelector(".other-choose");
    var oNoChooose = document.querySelector(".no-choose");
    var aItem = document.querySelectorAll(".item");
    var len = aItem.length;
    var chooseNum = 0;
    var num = 0;
    oAllChooose.addEventListener("click",allChoose);
    oOtherChooose.addEventListener("click",otherChoose);
    oNoChooose.addEventListener("click",noChoose);

    for( var i=0;i<len;i++ ) {
        (function(i){
            aItem[i].addEventListener("click", function () {
                oNoChooose.checked = false;
                oOtherChooose.checked = false;
                itemChange();
            })
        })(i);
    }


    function allChoose() {  //全选函数
        //单选和反选不选中；
        oOtherChooose.checked = false;
        oNoChooose.checked = false;
        for( var i=0;i<len;i++ ){
            if( aItem[i].checked ){
                chooseNum++;
            }
        }

        if( chooseNum==len ) {  //如果已经全选，则全不选
            for( var i=0;i<len;i++ ) {
                aItem[i].checked = false;
            }
        }else{
            for( var i=0;i<len;i++ ) { //没有全选，则全不选
                aItem[i].checked = true;
            }
        }

        //让chooseNum归零
        chooseNum= 0;
    }

    function noChoose() {  //全不选函数
        //让反选不选中
        oOtherChooose.checked = false;

        //选框全部取消选中
        for( var i=0;i<len;i++ ) {
            aItem[i].checked = false;
        }
    }

    function otherChoose() {  //反选函数
        oAllChooose.checked = false;
        for( var i=0;i<len;i++ ){
            if( aItem[i].checked ){
                chooseNum++;
            }
        }

        //如果选框没有选中的项，则不能进行反选
        if( chooseNum==0 ){
            event.preventDefault();
            alert("没有选中项！！");
            return false;
        }else {
            for( var i=0;i<len;i++ ) {
                if( !aItem[i].checked ) {
                    aItem[i].checked = true;
                }else {
                    aItem[i].checked = false;
                }
            }
        }
        chooseNum = 0;

    }

    function itemChange() {
        for( var i=0;i<len;i++ ) {
            if( aItem[i].checked ) {
                num++;
            }
        }
        console.log(num);
        if( num==len ) { //选框全部选中时，全选选中，否则不选中
            oAllChooose.checked = true;
        }else {
            oAllChooose.checked = false;
        }
        num=0
    }

}